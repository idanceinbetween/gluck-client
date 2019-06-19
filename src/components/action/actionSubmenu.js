import React, { Fragment } from 'react'

import { Container, Chip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}))

const ActionSubmenu = props => {
  const classes = useStyles()
  return (
    <Container maxWidth='sm'>
      {props.tabValue === 0 && (
        <Fragment>
          Filter:
          <Chip
            label='View All Active'
            onClick={() => props.handleGiftsFilter('allActive')}
            className={classes.chip}
            color={props.giftsFilter === 'allActive' ? 'secondary' : ''}
          />
          <Chip
            label='With requests'
            onClick={() => props.handleGiftsFilter('requested')}
            className={classes.chip}
            color={props.giftsFilter === 'requested' ? 'secondary' : ''}
          />
          <Chip
            label='Without requests'
            onClick={() => props.handleGiftsFilter('lonely')}
            className={classes.chip}
            color={props.giftsFilter === 'lonely' ? 'secondary' : ''}
          />
          {/* <Chip
            label='Archived'
            onClick={() => props.handleGiftsFilter('gifted')}
            className={classes.chip}
            color={props.giftsFilter === 'gifted' ? '#080808' : '#282828'}
          /> */}
        </Fragment>
      )}

      {props.tabValue === 1 && (
        <Fragment>
          Sort by:
          <Chip
            label='Hoarder'
            onClick={() => props.handleSortRequester('hoarder')}
            className={classes.chip}
            color={props.sortRequester === 'hoarder' ? 'secondary' : ''}
          />
          <Chip
            label='Conscious Taker'
            onClick={() => props.handleSortRequester('conscious')}
            className={classes.chip}
            color={props.sortRequester === 'conscious' ? 'secondary' : ''}
          />
          <Chip
            label='Name (asc)'
            onClick={() => props.handleSortRequester('asc')}
            className={classes.chip}
            color={props.sortRequester === 'asc' ? 'secondary' : ''}
          />
          <Chip
            label='Name (dsc)'
            onClick={() => props.handleSortRequester('dsc')}
            className={classes.chip}
            color={props.sortRequester === 'dsc' ? 'secondary' : ''}
          />
        </Fragment>
      )}
      {props.tabValue === 3 && (
        <Fragment>
          Filter:
          <Chip
            label='View All Exchanges'
            onClick={() => props.handleScheduleFilter('all')}
            className={classes.chip}
            color={props.scheduleFilter === 'all' ? 'secondary' : ''}
          />
          <Chip
            label='Giftings'
            onClick={() => props.handleScheduleFilter('giftings')}
            className={classes.chip}
            color={props.scheduleFilter === 'giftings' ? 'secondary' : ''}
          />
          <Chip
            label='Receivings'
            onClick={() => props.handleScheduleFilter('receivings')}
            className={classes.chip}
            color={props.scheduleFilter === 'receivings' ? 'secondary' : ''}
          />
        </Fragment>
      )}
      {props.tabValue === 2 && (
        <Fragment>
          Filter:
          <Chip
            label='View All Requested'
            onClick={() => props.handleMyRequestsFilter('all')}
            className={classes.chip}
            color={props.myRequestsFilter === 'all' ? 'secondary' : ''}
          />
          <Chip
            label='Pending'
            onClick={() => props.handleMyRequestsFilter('pending')}
            className={classes.chip}
            color={props.myRequestsFilter === 'pending' ? 'secondary' : ''}
          />
          <Chip
            label='On Hold'
            onClick={() => props.handleMyRequestsFilter('onhold')}
            className={classes.chip}
            color={props.myRequestsFilter === 'onhold' ? 'secondary' : ''}
          />
          <Chip
            label='Ready for Pickup'
            onClick={() => props.handleMyRequestsFilter('confirmed')}
            className={classes.chip}
            color={props.myRequestsFilter === 'confirmed' ? 'secondary' : ''}
          />
        </Fragment>
      )}
    </Container>
  )
}

export default ActionSubmenu
