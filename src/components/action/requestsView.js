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
      giftsObjsInMyReceivings,
      myReceivings,
      props.myRequestsFilter,
      props.gifts
    )

    return finalGiftsToMap.map(gift => {
      return (
        <Grid item key={gift.id}>
          <GiftIRequestedCard key={gift.id} gift={gift} users={props.users} />
        </Grid>
      )
    })
  } else {
    return <CircularProgress />
  }
}

const filterGifts = (myRequestedGifts, myReceivings, giftsFilter, allGifts) => {
  const myRequestedGiftsIds = myRequestedGifts.map(gifting => gifting.gift_id)

  // const myRequestedGifts = allGifts.filter(gift =>
  //   myRequestedGiftsIds.includes(gift.id)
  // )

  const pendingReceivings = myReceivings.filter(
    gifting => gifting.exchange_stat_id === 1
  )
  const pendingReceivingsIds = pendingReceivings.map(gifting => gifting.id)
  const pendingGifts = allGifts.filter(gift =>
    pendingReceivingsIds.includes(gift.id)
  )

  const confirmedReceivings = myReceivings.filter(
    gifting => gifting.exchange_stat_id === 2
  )
  const confirmedReceivingsIds = confirmedReceivings.map(gifting => gifting.id)
  const confirmedGifts = allGifts.filter(gift =>
    confirmedReceivingsIds.includes(gift.id)
  )

  const onholdReceivings = myReceivings.filter(
    gifting => gifting.exchange_stat_id === 3
  )
  const onholdReceivingsIds = onholdReceivings.map(gifting => gifting.id)
  const onholdGifts = allGifts.filter(gift =>
    onholdReceivingsIds.includes(gift.id)
  )

  const unsuccessfulReceivings = myReceivings.filter(
    gifting => gifting.exchange_stat_id === 5
  )
  const unsuccessfulReceivingsIds = unsuccessfulReceivings.map(
    gifting => gifting.id
  )
  const unsuccessfulGifts = allGifts.filter(gift =>
    unsuccessfulReceivingsIds.includes(gift.id)
  )

  const activeGifts = pendingGifts
    .concat(confirmedGifts.concat(onholdGifts))
    .flat()

  switch (giftsFilter) {
    case 'pending':
      return pendingGifts //find gift objects that are requested,committed or onhold
    case 'confirmed':
      return confirmedGifts
    case 'onhold':
      return onholdGifts
    case 'archived':
      return unsuccessfulGifts
    default:
      return activeGifts
  }
}

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
