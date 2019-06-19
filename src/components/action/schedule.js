import React from 'react'
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
  CircularProgress,
  Link
} from '@material-ui/core/'
import { Link as RouterLink } from 'react-router-dom'
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

const findGiftObjectByGifting = (props, gifting) => {
  if (props.users) {
    const gifter = props.users.find(user => user.id === gifting.gifter_id)

    if (gifter) {
      return gifter.gifts.find(gift => gift.id === gifting.gift_id)
    }
  }
}

const renderGiftsNamesForThisRecipient = props =>
  props.giftingsOfThisRecipient.map(gifting => {
    const giftObject = findGiftObjectByGifting(props, gifting)
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

const Schedule = props => {
  const classes = useStyles()
  return (
    <div>
      {props.recipient && props.giftingsOfThisRecipient.length > 0 ? (
        <Paper className={classes.root}>
          <Typography component='h6' variant='h6'>
            {DATE.convert(props.giftingsOfThisRecipient[0].date)}
          </Typography>
          <Typography variant='subtitle1' noWrap>
            {props.recipient.username}
          </Typography>

          <Typography variant='p' component='p' noWrap>
            <b>Receiving:</b>
          </Typography>

          <List>{renderGiftsNamesForThisRecipient(props)}</List>

          <Typography component='p' variant='p'>
            Contact: {props.recipient.email}
          </Typography>
          <br />
          <Divider />
          <Typography align='center'>
            <Button
              size='small'
              color='secondary'
              className={classes.button}
              noWrap
              onClick={() => props.exchangeCompletedWith(props.recipient.id)}
            >
              Collected
            </Button>
            <Link
              component={RouterLink}
              to='/action'
              color='inherit'
              className={classes.link}
            >
              <Button
                size='small'
                color='default'
                className={classes.button}
                noWrap
              >
                Manage
              </Button>
            </Link>
            <Button
              size='small'
              color='default'
              className={classes.button}
              noWrap
              onClick={() => {
                {
                  window.confirm(
                    `Are you sure you want to cancel all the exchange with ${
                      props.recipient.username
                    }?`
                  ) && props.exchangeCancelledWith(props.recipient.id)
                }
              }}
            >
              Cancel
            </Button>
          </Typography>
        </Paper>
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

export default Schedule
