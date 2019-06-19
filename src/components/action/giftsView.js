import React, { Fragment } from 'react'
import GiftCard from './giftCard'
import ActionUserPaper from './actionUserPaper'
import { Grid, CircularProgress } from '@material-ui/core'

const mapGiftsAccordingly = props => {
  if (Object.keys(props.user).length > 0) {
    const myGifts = props.user.gifts
    const myGiftings = props.user.giftings

    const finalGiftsObjsToMap = filterGifts(
      myGifts,
      myGiftings,
      props.giftsFilter
    )

    return finalGiftsObjsToMap.map(gift => {
      return (
        <Grid item key={gift.id}>
          <GiftCard
            key={gift.id}
            gift={gift}
            user={props.user}
            changeTab={value => props.changeTab(value)}
          />
        </Grid>
      )
    })
  } else {
    return <CircularProgress />
  }
}

const filterGifts = (myGifts, myGiftings, giftsFilter) => {
  const myArchivedGiftings = myGiftings.filter(
    gifting => gifting.exchange_stat_id === 4 || gifting.exchange_stat_id === 5
  )
  const myArchivedGiftingsIds = myArchivedGiftings.map(gifting => gifting.id)
  const myArchivedGiftsIds = myArchivedGiftings.map(gifting => gifting.gift_id)
  const myArchivedGifts = myGifts.filter(gift =>
    myArchivedGiftsIds.includes(gift.id)
  )

  const myActiveGifts = myGifts.filter(
    gift => !myArchivedGiftsIds.includes(gift.id)
  )
  const myRequestedGiftings = myGiftings.filter(
    gifting => !myArchivedGiftingsIds.includes(gifting.id)
  )
  const myRequestedGiftsIds = myRequestedGiftings.map(
    gifting => gifting.gift_id
  )
  const myRequestedGifts = myActiveGifts.filter(gift =>
    myRequestedGiftsIds.includes(gift.id)
  )
  const myLonelyGifts = myActiveGifts.filter(
    gift => !myRequestedGiftsIds.includes(gift.id)
  )

  switch (giftsFilter) {
    case 'requested':
      return myRequestedGifts //find gift objects that are requested,committed or onhold
    case 'lonely':
      return myLonelyGifts
    case 'allActive':
      return myActiveGifts
    case 'gifted':
      return myArchivedGifts
    default:
      return myActiveGifts
  }
}

const GiftsView = props => {
  if (props.user) {
    return (
      <Fragment>
        <Grid container spacing={2}>
          {mapGiftsAccordingly(props)}
        </Grid>
      </Fragment>
    )
  } else {
    return <CircularProgress />
  }
}

export default React.memo(GiftsView)
