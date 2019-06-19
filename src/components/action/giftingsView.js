import React, { Fragment } from 'react'
import ActionUserPaper from './actionUserPaper'
import { Grid, CircularProgress, Typography, Button } from '@material-ui/core'

const mapUniqueRecipientsNames = props => {
  if (props) {
    let ids = props.mapUniqueRecipientsIds(props)
    let uniqueRecipientsNames = []
    ids.map(id =>
      uniqueRecipientsNames.push(
        props.users.find(user => user.id === id).username
      )
    )
    return uniqueRecipientsNames
  }
}

const sortByName = (props, str) => {
  let names = mapUniqueRecipientsNames(props)
  let unsortedNames = [...new Set(names)]
  if (names) {
    names.sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) return 1
      if (a.toLowerCase() < b.toLowerCase()) return -1
      if (a.toLowerCase() === b.toLowerCase()) return 0
    })
    if (str === 'asc') {
      return names
    } else if (str === 'dsc') {
      return names.reverse()
    } else {
      return unsortedNames
    }
  }
}

const findUserIdWithThisName = (props, name) =>
  props.users.find(user => user.username.toLowerCase() === name.toLowerCase())
    .id

const sortNameFunction = props => {
  let sortedNamesOnly = sortByName(props, props.sortRequester)
  if (sortedNamesOnly) {
    let sortedRecipientsIds = sortedNamesOnly.map(name =>
      findUserIdWithThisName(props, name)
    )
    return sortedRecipientsIds
  }
}

const redirectSort = props => {
  switch (props.sortRequester) {
    case 'asc':
      return sortNameFunction(props)
    case 'dsc':
      return sortNameFunction(props)
    case 'hoarder':
      return sortQuantityFunction(props)
    case 'conscious':
      return sortQuantityFunction(props)
  }
}

const sortQuantityFunction = props => {
  let ids = props.mapUniqueRecipientsIds(props)
  let idQuantityPairs = ids.map(id => findIdAndQuantityPairs(props, id)).flat()
  // let idsWithGiftPairs = recipientQuantityPairs
  // let sortedIdsWithGiftsPairs = sortIdsWithGiftsPairs(recipientQuantityPairs)

  let sortedIdQuantityPairs = sortIdQuantityPairs(idQuantityPairs)
  let resultIds = sortedIdQuantityPairs.map(pair => pair.recipient_id)
  switch (props.sortRequester) {
    case 'conscious':
      return resultIds
    case 'hoarder':
      return resultIds.reverse()
  }
}

const sortIdQuantityPairs = idQuantityPairs => {
  idQuantityPairs.sort((a, b) => {
    if (a.quantity > b.quantity) return 1
    if (a.quantity < b.quantity) return -1
    if (a.quantity < b.quantity) return 0
  })
  return idQuantityPairs
}

const findIdAndQuantityPairs = (props, id) => {
  let giftPairsRequested = findGiftPairsRequested(props.user, id) //this returns an array [{gift, gifting_id} {gift, gift.id)}]
  let recipient = props.users.find(user => user.id === id)
  let idQuantityPairs = []
  let singleRecipientQtyPair = {
    recipient_id: id,
    quantity: giftPairsRequested.length
  }
  idQuantityPairs.push(singleRecipientQtyPair)
  return idQuantityPairs
}

const checkOutstandingExchanges = recipientObj => {
  let allReceivingsStatus = []
  recipientObj.receivings.map(r => {
    if (r.exchange_stat_id !== 4 && r.exchange_stat_id !== 5) {
      allReceivingsStatus.push(r)
    }
  })
  let allReceivingsStatusUniq = [...new Set(allReceivingsStatus)]
  if (allReceivingsStatusUniq.length > 0) {
    return true
  } else {
    return false
  }
}

const renderResults = props => {
  if (Object.keys(props.user).length > 0) {
    let sortedRecipientsIds = redirectSort(props)
    return sortedRecipientsIds.map(id => {
      let giftPairsRequested = findGiftPairsRequested(props.user, id) //this returns an array [{gift, gifting_id} {gift, gift.id)}]
      let recipient = props.users.find(user => user.id === id)

      if (checkOutstandingExchanges(recipient)) {
        return (
          <Grid item>
            <ActionUserPaper
              key={id}
              gifter={props.user}
              recipient={recipient}
              giftPairsRequested={giftPairsRequested} //an array of [{gift, gifting_id} {gift, gift.id)}]
              selectedGiftsIds={props.selectedGiftsIds}
              selectedGiftingsIds={props.selectedGiftingsIds}
              draftGifting={pair => props.draftGifting(pair)}
              commitGifting={id => props.commitGifting(id)}
              requestedGiftingsIds={props.requestedGiftingsIds}
              committedGiftingsIds={props.committedGiftingsIds}
              onholdGiftingsIds={props.onholdGiftingsIds}
              completedGiftingsIds={props.completedGiftingsIds}
              cancelledGiftingsIds={props.cancelledGiftingsIds}
              cancelSingleGifting={giftingId =>
                props.cancelSingleGifting(giftingId)
              }
            />
          </Grid>
        )
      }
    })
  } else {
    return <CircularProgress />
  }
}

const findGiftPairsRequested = (user, id) => {
  let findGiftings = user.giftings.filter(g => g.recipient_id === id)
  let giftPairs = []
  findGiftings.forEach(gifting => {
    const pair = {}
    pair['gifting_id'] = gifting.id
    pair['gift'] = user.gifts.find(g => g.id === gifting.gift_id)
    giftPairs.push(pair)
  })
  return giftPairs
}

const findOutstandingRequests = user => {
  let giftingsExchangeStatIds = user.giftings.map(
    gifting => gifting.exchange_stat_id
  )
  return (
    giftingsExchangeStatIds.includes(1) ||
    giftingsExchangeStatIds.includes(2) ||
    giftingsExchangeStatIds.includes(3)
  )
}

const GiftingsView = props => {
  if (props.user) {
    return (
      <Fragment>
        <Grid container spacing={2}>
          <Typography variant='h6'>
            You only have two actions: Commit gift, or explicitly cancel
            request. Other's will be automatically taken care of.
          </Typography>
          {renderResults(props)}
          {findOutstandingRequests.length === 0 && (
            <Button>You have no actions to take, woo hoo!</Button>
          )}
        </Grid>
        <Grid container>
          <Grid container>
            <Grid item xs={12} id='centerContentInGrid'>
              {findOutstandingRequests.length > 0 && (
                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => props.commitGiftings()}
                  >
                    Confirm all giftings
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    )
  } else {
    return <CircularProgress />
  }
}

export default React.memo(GiftingsView)
