import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  CircularProgress
} from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 345
  }
}))

const findGiftingGifterStat = (props, giftingId) => {
  if (props.gifter.giftings.length > 0) {
    const foundGifting = props.gifter.giftings.find(g => g.id === giftingId)

    switch (foundGifting.exchange_stat_id) {
      case 1:
        return 'Requested'
      case 2:
        return 'Committed'
      case 3:
        return 'On hold'
      case 4:
        return 'Completed'
      case 5:
        return 'Cancelled'
      default:
        return null
    }
  }
}

const updateViewForGiftToDisable = (props, pair) => {
  return (
    <Fragment>
      <ListItem key={pair.gifting_id} dense button style={{ color: '#A8A8A8' }}>
        <ListItemIcon>
          <Checkbox
            edge='start'
            disabled
            disableRipple
            inputProps={{
              'aria-labelledby': pair.gifting_id
            }}
          />
        </ListItemIcon>
        <ListItemText
          id={pair.gifting_id}
          className='disableGift'
          primary={
            `${pair.gift.title} (status: ` +
            findGiftingGifterStat(props, pair.gifting_id) +
            `)`
          }
        />
      </ListItem>
    </Fragment>
  )
}

const updateViewForGiftToEdit = (props, pair) => {
  return (
    <Fragment>
      <ListItem key={pair.gifting_id} dense button>
        {renderColourBasedOnExchangeStat(props, pair)}
      </ListItem>
    </Fragment>
  )
}

const renderColourBasedOnExchangeStat = (props, pair) => {
  if (props.committedGiftingsIds.includes(pair.gifting_id)) {
    return (
      <Fragment>
        <ListItemIcon>
          <Checkbox
            checked
            disabled
            edge='start'
            disableRipple
            inputProps={{
              'aria-labelledby': pair.gifting_id
            }}
            onChange={() => props.draftGifting(pair)}
          />
        </ListItemIcon>
        <ListItemText
          id={pair.gifting_id}
          className='committedGift'
          primary={
            `${pair.gift.title} (status: ` +
            findGiftingGifterStat(props, pair.gifting_id) +
            ')'
          }
        />
        <DeleteIcon
          onClick={() => {
            let r = window.confirm(
              'Are you sure you want to delete this exchange?'
            )
            if (r) {
              props.cancelSingleGifting(pair.gifting_id)
            } else {
              return null
            }
          }}
        />
      </Fragment>
    )
  } else if (props.onholdGiftingsIds.includes(pair.gifting_id)) {
    return (
      <Fragment>
        <ListItemIcon>
          <Checkbox
            edge='start'
            disabled
            disableRipple
            inputProps={{
              'aria-labelledby': pair.gifting_id
            }}
            onChange={() => props.draftGifting(pair)}
          />
        </ListItemIcon>
        <ListItemText
          id={pair.gifting_id}
          className='onholdGift'
          primary={
            `${pair.gift.title} (status: ` +
            findGiftingGifterStat(props, pair.gifting_id) +
            ')'
          }
        />
        <DeleteIcon
          onClick={() => {
            let r = window.confirm(
              'Are you sure you want to delete this exchange?'
            )
            if (r) {
              props.cancelSingleGifting(pair.gifting_id)
            } else {
              return null
            }
          }}
        />
      </Fragment>
    )
  } else if (props.requestedGiftingsIds.includes(pair.gifting_id)) {
    return (
      <Fragment>
        <ListItemIcon>
          <Checkbox
            edge='start'
            disableRipple
            inputProps={{
              'aria-labelledby': pair.gifting_id
            }}
            onChange={() => props.draftGifting(pair)}
          />
        </ListItemIcon>
        <ListItemText
          id={pair.gifting_id}
          primary={
            `${pair.gift.title} (status: ` +
            findGiftingGifterStat(props, pair.gifting_id) +
            ')'
          }
        />
        <DeleteIcon
          onClick={() => {
            let r = window.confirm(
              'Are you sure you want to delete this exchange?'
            )
            if (r) {
              props.cancelSingleGifting(pair.gifting_id)
            } else {
              return null
            }
          }}
        />
      </Fragment>
    )
  }
}

// const renderCommittedGift = (props, pair) => {
//   return (
//     <Fragment>
//       <ListItem key={pair.gifting_id} dense button>
//         <ListItemIcon>
//           <Checkbox
//             edge='start'
//             disableRipple
//             inputProps={{
//               'aria-labelledby': pair.gifting_id
//             }}
//             onChange={() => props.draftGifting(pair)}
//           />
//         </ListItemIcon>
//         <ListItemText
//           id={pair.gifting_id}
//           className='committedGift'
//           primary={
//             `${pair.gift.title} (status: ` +
//             findGiftingGifterStat(props, pair.gifting_id) +
//             ')'
//           }
//         />
//       </ListItem>
//     </Fragment>
//   )
// }

// const renderOnholdGift = (props, pair) => {
//   return (
//     <Fragment>
//       <ListItem key={pair.gifting_id} dense button>
//         <ListItemIcon>
//           <Checkbox
//             edge='start'
//             disableRipple
//             inputProps={{
//               'aria-labelledby': pair.gifting_id
//             }}
//             onChange={() => props.draftGifting(pair)}
//           />
//         </ListItemIcon>
//         <ListItemText
//           id={pair.gifting_id}
//           className='onholdGift'
//           primary={
//             `${pair.gift.title} (status: ` +
//             findGiftingGifterStat(props, pair.gifting_id) +
//             ')'
//           }
//         />
//       </ListItem>
//     </Fragment>
//   )
// }

const ActionUserPaper = props => {
  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h3' component='h3'>
          {props.recipient.username}
        </Typography>
        <Typography variant='h6' component='h6'>
          Gifts requested:
        </Typography>
        <List className={classes.root}>
          {Object.keys(props.giftPairsRequested).length > 0 ? ( //make sure does not throw error during async loading
            props.giftPairsRequested.map(pair => {
              return (
                <Fragment key={pair.gifting_id}>
                  {props.selectedGiftsIds.includes(pair.gift.id) &&
                  !props.selectedGiftingsIds.includes(pair.gifting_id)
                    ? updateViewForGiftToDisable(props, pair)
                    : updateViewForGiftToEdit(props, pair)}
                </Fragment>
              )
            })
          ) : (
            <CircularProgress />
          )}
        </List>
      </Paper>
    </div>
  )
}
export default ActionUserPaper
