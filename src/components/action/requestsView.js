import React, { Fragment } from 'react'
import GiftIRequestedCard from './giftIRequestedCard'
import { Grid, CircularProgress } from '@material-ui/core'

const mapGiftsInMyReceivings = props => {
  if (Object.keys(props.user).length > 0) {
    const myReceivings = props.user.receivings
    let giftsIdsInMyReceivings = myReceivings.map(giftings => giftings.gift_id)
    const allGifts = props.gifts
    let giftsObjsInMyReceivings = []

    giftsIdsInMyReceivings.filter(id =>
      giftsObjsInMyReceivings.push(allGifts.find(gift => gift.id === id))
    )

    let finalGiftsToMap = filterGifts(
      myReceivings,
      props.gifts,
      props.myRequestsFilter
    )

    if (finalGiftsToMap.length > 0) {
      return finalGiftsToMap.map(gift => {
        return (
          <Grid item key={gift.id}>
            <GiftIRequestedCard key={gift.id} gift={gift} users={props.users} />
          </Grid>
        )
      })
    } else {
      return (
        <Grid container>
          <Grid container>
            <Grid item xs={12} id='centerContentInGrid'>
              <div>
                <h4>You have no outstanding requests at the moment.</h4>
              </div>
            </Grid>
          </Grid>
        </Grid>
      )
    }
  } else {
    return <CircularProgress />
  }
}

const filterGifts = (myReceivings, allGifts, strFilter) => {
  let stat_id = findStatId(strFilter)
  return findGiftsToMap(myReceivings, allGifts, stat_id)
}

const findStatId = strFilter => {
  switch (strFilter) {
    case 'pending':
      return 1
    case 'committed':
      return 2
    case 'onhold':
      return 3
    case 'archived':
      return 4
    case 'all':
      return 0
  }
}

const findGiftsToMap = (myReceivings, allGifts, stat_id) => {
  if (stat_id === 0) {
    const allRequestedGiftsIds = myReceivings.map(gifting => gifting.gift_id)
    const allRequestedGifts = allGifts.filter(gift =>
      allRequestedGiftsIds.includes(gift.id)
    )
    return allRequestedGifts
  } else {
    const selectedReceivings = myReceivings.filter(
      gifting => gifting.exchange_stat_id === stat_id
    )
    const selectedGiftsIds = selectedReceivings.map(gifting => gifting.gift_id)
    const selectedGifts = allGifts.filter(gift =>
      selectedGiftsIds.includes(gift.id)
    )
    return selectedGifts
  }
}

// const pendingReceivings = myReceivings.filter(
//   gifting => gifting.exchange_stat_id === 1
// )
// const pendingReceivedGiftsIds = pendingReceivings.map(
//   gifting => gifting.gift_id
// )
// const pendingGifts = allGifts.filter(gift =>
//   pendingReceivedGiftsIds.includes(gift.id)
// )

// const confirmedReceivings = myReceivings.filter(
//   gifting => gifting.exchange_stat_id === 2
// )
// const confirmedReceivingsIds = confirmedReceivings.map(gifting => gifting.id)
// const confirmedGifts = allGifts.filter(gift =>
//   confirmedReceivingsIds.includes(gift.id)
// )

// const onholdReceivings = myReceivings.filter(
//   gifting => gifting.exchange_stat_id === 3
// )
// const onholdReceivingsIds = onholdReceivings.map(gifting => gifting.id)
// const onholdGifts = allGifts.filter(gift =>
//   onholdReceivingsIds.includes(gift.id)
// )

// const unsuccessfulReceivings = myReceivings.filter(
//   gifting => gifting.exchange_stat_id === 5
// )
// const unsuccessfulReceivingsIds = unsuccessfulReceivings.map(
//   gifting => gifting.id
// )
// const unsuccessfulGifts = allGifts.filter(gift =>
//   unsuccessfulReceivingsIds.includes(gift.id)
// )

// const activeGifts = pendingGifts
//   .concat(confirmedGifts.concat(onholdGifts))
//   .flat()

// switch (giftsFilter) {
//   case 'pending':
//     return pendingGifts //find gift objects that are requested,committed or onhold
//   case 'committed':
//     return confirmedGifts
//   case 'onhold':
//     return onholdGifts
//   case 'archived':
//     return unsuccessfulGifts
//   default:
//     return activeGifts
// }
// }

const RequestsView = props => {
  if (props.user) {
    return (
      <Fragment>
        <div>{mapGiftsInMyReceivings(props)}</div>
      </Fragment>
    )
  } else {
    return <CircularProgress />
  }
}

export default RequestsView
