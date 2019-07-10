import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Tab, Tabs } from '@material-ui/core'

import GiftsView from './giftsView'
import GiftingsView from './giftingsView'
import RequestsView from './requestsView'
import ScheduleContainer from './scheduleContainer'
import ActionSubmenu from './actionSubmenu'
import API from '../../API'

class ActionCanvas extends Component {
  state = {
    user: this.props.user,
    selectedGiftsIds: [], //For all giftings across recipients, used for draft gifting
    selectedGiftingsIds: [], //For all giftings across recipients, used for draft gifting
    tabValue: this.props.tabValue,
    giftsFilter: 'allActive',
    sortRequester: 'asc',
    myRequestsFilter: 'all',
    scheduleFilter: 'all',
    requestedGiftingsIds: [],
    committedGiftingsIds: [],
    onholdGiftingsIds: [],
    completedGiftingsIds: [],
    cancelledGiftingsIds: []
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/start')
    }

    let recipientsIds = this.mapUniqueRecipientsIds(this.props)
    let requestedGiftingsIds = []
    let committedGiftingsIds = []
    let onholdGiftingsIds = []
    let completedGiftingsIds = []
    let cancelledGiftingsIds = []

    if (recipientsIds && recipientsIds.length > 0) {
      recipientsIds.map(id =>
        this.props.users
          .find(user => user.id === id)
          // eslint-disable-next-line
          .receivings.map(r => {
            // eslint-disable-next-line
            switch (r.exchange_stat_id.toString()) {
              case '1':
                requestedGiftingsIds.push(r.id)
                return null
              case '2':
                committedGiftingsIds.push(r.id)
                return null
              case '3':
                onholdGiftingsIds.push(r.id)
                return null
              case '4':
                completedGiftingsIds.push(r.id)
                return null
              case '5':
                cancelledGiftingsIds.push(r.id)
                return null
            }
          })
      )
    }

    this.setState({
      requestedGiftingsIds,
      committedGiftingsIds,
      onholdGiftingsIds,
      completedGiftingsIds,
      cancelledGiftingsIds
    })
  }

  findUser = id => this.props.users.find(user => user.id === id)

  cancelSingleGifting = giftingId => {
    let selectedGifting = this.state.user.giftings.find(
      gifting => gifting.id === giftingId
    ) //find the GIFTING
    this.changeGiftingState(selectedGifting, 5) // archive it

    let cancelledGiftingIdAsAnArray = []
    cancelledGiftingIdAsAnArray.push(selectedGifting.id)

    let giftingsToMakeAvailable = this.findOtherGiftingsObjsWithSameGift(
      selectedGifting.gift_id,
      cancelledGiftingIdAsAnArray
    ) //collect ALL of the results, an array per user

    if (giftingsToMakeAvailable.flat().length > 0) {
      // eslint-disable-next-line
      return giftingsToMakeAvailable.flat().map(gifting => {
        if (gifting.exchange_stat_id === 3) {
          this.changeGiftingState(gifting, 1)
          return null
        }
      })
    }

    this.setState(
      { selectedGiftsIds: [], selectedGiftingsIds: [] },
      this.alertMessageSummary()
    )
    return window.location.reload()
  }

  commitGiftings = () => {
    debugger
    let giftsIdsInCommittedGiftings = []
    let committedGiftingsIds = []
    let giftingsToPutOnHold = []

    this.state.selectedGiftingsIds.map(id => {
      let selectedGifting = this.state.user.giftings.find(
        gifting => gifting.id === id
      )
      this.changeGiftingState(selectedGifting, 2)
      giftsIdsInCommittedGiftings.push(selectedGifting.gift_id)
      committedGiftingsIds.push(id)
      return null
    }) //find giftings to commit for this recipient

    if (giftsIdsInCommittedGiftings.length > 0) {
      giftsIdsInCommittedGiftings.map(giftId =>
        giftingsToPutOnHold.push(
          this.findOtherGiftingsObjsWithSameGift(giftId, committedGiftingsIds)
        )
      )
    } // find other giftings with same gift in order to put on hold

    if (giftingsToPutOnHold.flat().length > 0) {
      // eslint-disable-next-line
      return giftingsToPutOnHold.flat().map(gifting => {
        if (gifting.exchange_stat_id === 1) {
          this.changeGiftingState(gifting, 3)
          return null
        }
      })
    }
    this.setState(
      { selectedGiftsIds: [], selectedGiftingsIds: [] },
      this.alertMessageSummary() // complete transaction
    )

    return window.location.reload()
  }

  changeGiftingState = (gifting, statId) => {
    gifting.exchange_stat_id = statId
    API.updateExchangeStat(gifting)
  }

  alertMessageSummary = () => {
    return alert(
      'Status of all giftings has been updated and the recipients notified by email.'
    )
  }

  findOtherGiftingsObjsWithSameGift = (giftId, giftingsIdsToNotPickFrom) => {
    let allGiftingsWithThisGift = this.state.user.giftings.filter(
      gifting => gifting.gift_id === giftId
    )
    return allGiftingsWithThisGift.filter(
      gifting => !giftingsIdsToNotPickFrom.includes(gifting.id)
    )
  }

  handleGiftsFilter = str => this.setState({ giftsFilter: str })

  handleMyRequestsFilter = str => this.setState({ myRequestsFilter: str })

  handleScheduleFilter = str => this.setState({ scheduleFilter: str })

  handleSortRequester = str => this.setState({ sortRequester: str })

  changeTab = (event, newValue) => this.setState({ tabValue: newValue })

  changeSortByExpiry = str => this.setState({ sortByExpiry: str })

  draftGifting = pair => {
    if (!this.state.selectedGiftsIds.includes(pair.gift.id)) {
      //if the gift is not yet selected to be gifted, this click is to add
      const selectedGiftsIds = [...this.state.selectedGiftsIds]
      const selectedGiftingsIds = [...this.state.selectedGiftingsIds]
      selectedGiftsIds.push(pair.gift.id)
      selectedGiftingsIds.push(pair.gifting_id)
      this.setState({ selectedGiftsIds, selectedGiftingsIds })
    } else if (this.state.selectedGiftsIds.includes(pair.gift.id)) {
      //if the gift is already selected, this click is to remove
      const currentIndex = this.state.selectedGiftsIds.indexOf(pair.gift.id)
      const selectedGiftsIds = [...this.state.selectedGiftsIds]
      const selectedGiftingsIds = [...this.state.selectedGiftingsIds]
      selectedGiftsIds.splice(currentIndex, 1)
      selectedGiftingsIds.splice(currentIndex, 1)
      this.setState({ selectedGiftsIds, selectedGiftingsIds })
    }
  }

  findCommittedGiftingsWithThisRecipient = recipientId => {
    const foundAllGiftingsWithThisRecipient = this.props.user.giftings.filter(
      gifting => gifting.recipient_id === recipientId
    )

    const giftingsWithCommittedStatus = foundAllGiftingsWithThisRecipient.filter(
      gifting => gifting.exchange_stat_id === 2
    )
    return giftingsWithCommittedStatus
  }

  exchangeCompletedWith = recipientId => {
    const selectedGiftings = this.findCommittedGiftingsWithThisRecipient(
      recipientId
    )
    const selectedGiftingsIds = selectedGiftings.map(gifting => gifting.id)

    // eslint-disable-next-line
    selectedGiftings.map(gifting => {
      this.changeGiftingState(gifting, 4)
      const otherGiftingsToArchive = this.findOtherGiftingsObjsWithSameGift(
        gifting.gift_id,
        selectedGiftingsIds
      )
      otherGiftingsToArchive.map(gifting => this.changeGiftingState(gifting, 5))
    })

    this.alertMessageSummary()
    return window.location.reload()
  }

  exchangeCancelledWith = recipientId => {
    const selectedGiftings = this.findCommittedGiftingsWithThisRecipient(
      recipientId
    )

    const selectedGiftingsIds = selectedGiftings.map(gifting => gifting.id)

    // eslint-disable-next-line
    selectedGiftings.map(gifting => {
      this.changeGiftingState(gifting, 5)
      const otherGiftingsToRelease = this.findOtherGiftingsObjsWithSameGift(
        gifting.gift_id,
        selectedGiftingsIds
      )
      otherGiftingsToRelease.map(gifting => this.changeGiftingState(gifting, 1))
    })

    this.alertMessageSummary()
    window.location.reload()
  }

  mapUniqueRecipientsIds = props => {
    if (Object.keys(props.user).length > 0) {
      let results = props.user.giftings.map(gifting => gifting.recipient_id)
      let recipients_ids = [...new Set(results)]
      return recipients_ids
    } else return null
  }

  render() {
    const {
      viewByRequesters,
      selectedGiftsIds,
      selectedGiftingsIds,
      tabValue,
      giftsFilter,
      sortRequester,
      requestedGiftingsIds,
      committedGiftingsIds,
      onholdGiftingsIds,
      completedGiftingsIds,
      cancelledGiftingsIds,
      myRequestsFilter,
      scheduleFilter
    } = this.state
    const { users, user, gifts, changeTab1 } = this.props
    const {
      draftGifting,
      commitGiftings,
      cancelSingleGifting,
      exchangeCompletedWith,
      exchangeCancelledWith,
      changeTab,
      handleGiftsFilter,
      handleSortRequester,

      mapUniqueRecipientsIds,
      handleMyRequestsFilter,
      handleScheduleFilter
    } = this

    return (
      <Container>
        <Tabs
          value={tabValue}
          onChange={changeTab}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Exchange Schedule' />
          <Tab label='Incoming Requests' />
          <Tab label='Gifts I Requested' />
          <Tab label='Gifts I Offer' />
        </Tabs>

        <ActionSubmenu
          tabValue={tabValue}
          giftsFilter={giftsFilter}
          sortRequester={sortRequester}
          myRequestsFilter={myRequestsFilter}
          scheduleFilter={scheduleFilter}
          handleGiftsFilter={str => handleGiftsFilter(str)}
          handleSortRequester={str => handleSortRequester(str)}
          handleMyRequestsFilter={str => handleMyRequestsFilter(str)}
          handleScheduleFilter={str => handleScheduleFilter(str)}
        />
        {tabValue === 0 && (
          <ScheduleContainer
            user={user}
            users={users}
            gifts={gifts}
            changeTab1={value => changeTab1(value)}
            scheduleFilter={scheduleFilter}
            exchangeCompletedWith={recipientId =>
              exchangeCompletedWith(recipientId)
            }
            exchangeCancelledWith={recipientId =>
              exchangeCancelledWith(recipientId)
            }
          />
        )}

        {tabValue === 1 && (
          <GiftingsView
            users={users}
            user={user}
            viewByRequesters={viewByRequesters}
            selectedGiftsIds={selectedGiftsIds}
            selectedGiftingsIds={selectedGiftingsIds}
            giftsFilter={giftsFilter}
            sortRequester={sortRequester}
            commitGiftings={commitGiftings}
            requestedGiftingsIds={requestedGiftingsIds}
            committedGiftingsIds={committedGiftingsIds}
            onholdGiftingsIds={onholdGiftingsIds}
            completedGiftingsIds={completedGiftingsIds}
            cancelledGiftingsIds={cancelledGiftingsIds}
            draftGifting={id => draftGifting(id)}
            cancelSingleGifting={id => cancelSingleGifting(id)}
            exchangeCompletedWith={recipientId =>
              exchangeCompletedWith(recipientId)
            }
            exchangeCancelledWith={recipientId =>
              exchangeCancelledWith(recipientId)
            }
            mapUniqueRecipientsIds={mapUniqueRecipientsIds}
          />
        )}
        {tabValue === 2 && (
          <RequestsView
            users={users}
            user={user}
            gifts={gifts}
            myRequestsFilter={myRequestsFilter}
            handleMyRequestsFilter={str => handleMyRequestsFilter(str)}
          />
        )}
        {tabValue === 3 && (
          <GiftsView
            users={users}
            user={user}
            changeTab1={value => changeTab1(value)}
            selectedGiftsIds={selectedGiftsIds}
            selectedGiftingsIds={selectedGiftingsIds}
            giftsFilter={giftsFilter}
          />
        )}
      </Container>
    )
  }
}

export default withRouter(ActionCanvas)
