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

    if (finalGiftsObjsToMap.length > 0) {
      return finalGiftsObjsToMap.map(gift => {
        return (
          <Grid item key={gift.id}>
            <GiftCard
              key={gift.id}
              gift={gift}
              user={props.user}
              changeTab1={value => props.changeTab1(value)}
            />
          </Grid>
        )
      })
    } else {
      return (
        <Grid container>
          <Grid container>
            <Grid item xs={12} id='centerContentInGrid'>
              <div>
                <h4>You have no gifts on offer at the moment.</h4>
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

const filterGifts = (myGifts, myGiftings, giftsFilter) => {
  const myArchivedGiftings = myGiftings.filter(
    gifting => gifting.exchange_stat_id === 4
  )
  const myArchivedGiftingsIds = myArchivedGiftings.map(gifting => gifting.id)
  const myArchivedGiftsIds = myArchivedGiftings.map(gifting => gifting.gift_id)
  const myArchivedGifts = myGifts.filter(gift =>
    myArchivedGiftsIds.includes(gift.id)
  ) //These are archived gifts, completed and shouldn't be available to public
  const myActiveGiftings = myGiftings.filter(
    gifting => gifting.exchange_stat_id !== 4
  )
  const myActiveGifts = myGifts.filter(
    gift => !myArchivedGiftsIds.includes(gift.id)
  ) //these are all gifts still active, requested or not.
  const myRequestedGifts = []
  const myLonelyGifts = []
  myActiveGifts.map(gift => {
    if (myActiveGiftings.find(g => g.gift_id === gift.id)) {
      myRequestedGifts.push(gift)
    } else myLonelyGifts.push(gift)
  })

  switch (giftsFilter) {
    case 'requested':
      return myRequestedGifts //find gift objects that are requested,committed or onhold
    case 'lonely':
      return myLonelyGifts
    case 'allActive':
      return myRequestedGifts.concat(myLonelyGifts)
    case 'gifted':
      return myArchivedGifts
    default:
      return myRequestedGifts.concat(myLonelyGifts)
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
