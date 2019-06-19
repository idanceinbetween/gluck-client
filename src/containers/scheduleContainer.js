import React from 'react'
import Schedule from '../components/action/schedule'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, CircularProgress } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: {
    padding: theme.spacing(3, 2),
    maxWidth: 300
  }
}))

const renderCommittedGiftings = props => {
  const giftingsInQuestion = findCommittedGiftings(props.user)
  const recipients = findUniqueRecipientsObjectsFromGiftings(
    giftingsInQuestion,
    props.users
  )

  return recipients.map(recipient => {
    return (
      <Grid item md={3} zeroMinWidth>
        <Schedule
          key={recipient.id}
          recipient={recipient}
          giftingsOfThisRecipient={giftingsOfThisRecipient(
            recipient,
            giftingsInQuestion
          )}
          users={props.users}
          exchangeCompletedWith={recipientId =>
            props.exchangeCompletedWith(recipientId)
          }
          exchangeCancelledWith={recipientId =>
            props.exchangeCancelledWith(recipientId)
          }
        />
      </Grid>
    )
  })
}

const findCommittedGiftings = user =>
  user.giftings.filter(g => g.exchange_stat_id === 2)

const giftingsOfThisRecipient = (recipient, giftingsOfThisGifter) => {
  return giftingsOfThisGifter.filter(
    gifting => gifting.recipient_id === recipient.id
  )
}
const findUniqueRecipientsObjectsFromGiftings = (giftings, users) => {
  const r = []
  giftings.map(g => r.push(users.find(u => u.id === g.recipient_id)))
  const recipients = [...new Set(r)] // unique recipients
  return recipients
}

const ScheduleContainer = props => {
  const classes = useStyles()
  if (Object.keys(props.user).length > 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3} zeroMinWidth>
          {renderCommittedGiftings(props)}

          <Grid item md={3}>
            <Paper className={classes.paperRoot}>
              <Typography>
                You're doing great! And I'm just testing a really long text to
                check that everything is ok.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return <CircularProgress />
  }
}

export default ScheduleContainer
