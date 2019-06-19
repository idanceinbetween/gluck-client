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
  Button,
  Divider,
  CircularProgress
} from '@material-ui/core/'
import DATE from '../../Date'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    maxWidth: 300
  },
  button: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 0, 0, 0)
  }
}))

const findGiftObjectByExchange = (props, exchange) => {
  if (props.users) {
    const gifter = props.users.find(user => user.id === exchange.gifter_id)

    if (gifter) {
      return gifter.gifts.find(gift => gift.id === exchange.gift_id)
    }
  }
}

const renderGiftsNamesForThisUser = props =>
  props.exchangesOfThisUser.map(exchange => {
    const giftObject = findGiftObjectByExchange(props, exchange)
    if (giftObject) {
      return (
        <ListItem key={giftObject.id} dense button>
          <ListItemIcon>
            <Checkbox
              edge='start'
              disabled
              checked
              disableRipple
              inputProps={{
                'aria-labelledby': giftObject.id
              }}
            />
          </ListItemIcon>
          <ListItemText
            id={giftObject.id}
            primary={`${giftObject.title} (status: Committed)`}
          />
        </ListItem>
      )
    } else {
      return <CircularProgress />
    }
  })

const renderSchedule = (props, classes) => {
  return (
    <Fragment>
      <Paper className={classes.root}>
        <Typography component='h6' variant='h6'>
          {DATE.convert(props.exchangesOfThisUser[0].date)}
        </Typography>
        <Typography variant='subtitle1' noWrap>
          {props.user.username}
        </Typography>

        {props.type === 'recipient' && (
          <Typography variant='p' component='p' noWrap>
            <b>is receiving the following from you:</b>
          </Typography>
        )}

        {props.type === 'gifter' && (
          <Typography variant='p' component='p' noWrap>
            <b>is gifting the following to you:</b>
          </Typography>
        )}

        <List>{renderGiftsNamesForThisUser(props)}</List>

        <Typography component='p' variant='p'>
          Contact: {props.user.email}
        </Typography>
        <br />
        <Divider />
        <Typography align='center'>
          {props.type === 'recipient' && (
            <Fragment>
              <Button
                size='small'
                color='secondary'
                className={classes.button}
                noWrap
                onClick={() => props.exchangeCompletedWith(props.user.id)}
              >
                Collected
              </Button>

              <Button
                size='small'
                color='default'
                className={classes.button}
                noWrap
                onClick={() => props.changeTab(1)}
              >
                Manage
              </Button>
            </Fragment>
          )}
          <Button
            size='small'
            color='default'
            className={classes.button}
            noWrap
            onClick={() => {
              {
                window.confirm(
                  `Are you sure you want to cancel all the exchange with ${
                    props.user.username
                  }?`
                ) && props.exchangeCancelledWith(props.user.id)
              }
            }}
          >
            Cancel
          </Button>
        </Typography>
      </Paper>
    </Fragment>
  )
}

const Schedule = props => {
  const classes = useStyles()
  return (
    <div>
      {props.user && props.exchangesOfThisUser.length > 0 ? (
        renderSchedule(props, classes)
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Schedule
