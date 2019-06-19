import React from 'react'
import Schedule from '../components/action/schedule'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, CircularProgress } from '@material-ui/core'
import DATE from '../Date'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: {
    padding: theme.spacing(3, 2),
    maxWidth: 300
  }
}))

// const renderCommittedGiftings = props => {
//   const giftingsInQuestion = findCommittedGiftings(props.user)
//   const recipients = findUniqueRecipientsObjectsFromGiftings(
//     giftingsInQuestion,
//     props.users
//   )

//   return recipients.map(recipient => {
//     return (
//       <Grid item md={3} zeroMinWidth>
//         <Schedule
//           key={recipient.id}
//           recipient={recipient}
//           giftingsOfThisRecipient={giftingsOfThisRecipient(
//             recipient,
//             giftingsInQuestion
//           )}
//           users={props.users}
//           exchangeCompletedWith={recipientId =>
//             props.exchangeCompletedWith(recipientId)
//           }
//           exchangeCancelledWith={recipientId =>
//             props.exchangeCancelledWith(recipientId)
//           }
//         />
//       </Grid>
//     )
//   })
// }

const renderCommittedExchanges = props => {
  const sortedExchanges = sortExchangesAccordingly(props)
  const users = findUniqueUsersObjectsFromExchanges(
    sortedExchanges,
    props.users,
    props.user
  )
  let recipientsIds = []
  props.user.giftings.map(gifting => {
    // if (gifting.recipient_id !== props.user.id) {
    recipientsIds.push(gifting.recipient_id)
    // }
  })
  let giftersIds = []
  props.user.receivings.map(receiving => {
    giftersIds.push(receiving.gifter_id)
  })

  return users.map(user => {
    if (recipientsIds.includes(user.id) && !giftersIds.includes(user.id)) {
      //as recipient only
      return (
        <Grid item md={3} zeroMinWidth key={user.id}>
          <Schedule
            key={user.id}
            user={user}
            exchangesOfThisUser={exchangesOfThisUser(
              user,
              'recipient',
              sortedExchanges,
              props.user
            )}
            users={props.users}
            exchangeCancelledWith={userId =>
              props.exchangeCancelledWith(userId)
            }
            type='recipient'
          />
        </Grid>
      )
    } else if (
      !recipientsIds.includes(user.id) &&
      giftersIds.includes(user.id)
    ) {
      // as gifter only
      return (
        <Grid item md={3} zeroMinWidth>
          <Schedule
            key={user.id}
            user={user}
            exchangesOfThisUser={exchangesOfThisUser(
              user,
              'gifter',
              sortedExchanges,
              props.user
            )}
            users={props.users}
            exchangeCancelledWith={userId =>
              props.exchangeCancelledWith(userId)
            }
            type='gifter'
          />
        </Grid>
      )
    } else if (
      recipientsIds.includes(user.id) &&
      giftersIds.includes(user.id)
    ) {
      //as gifter and recipient
      return (
        <Grid item md={3} zeroMinWidth>
          <Schedule
            key={user.id}
            user={user}
            exchangesOfThisUser={exchangesOfThisUser(
              user,
              'double',
              sortedExchanges,
              props.user
            )}
            users={props.users}
            exchangeCancelledWith={userId =>
              props.exchangeCancelledWith(userId)
            }
            type='double'
          />
        </Grid>
      )
    }
  })
}

const findUniqueUsersObjectsFromExchanges = (exchanges, users, me) => {
  const firstUsersArray = []
  exchanges.map(g =>
    firstUsersArray.push(users.find(u => u.id === g.recipient_id))
  )
  exchanges.map(g =>
    firstUsersArray.push(users.find(u => u.id === g.gifter_id))
  )
  const secondUsersArray = []
  firstUsersArray.map(user => {
    if (user.id !== me.id) {
      secondUsersArray.push(user)
    }
  }) //remove myself from this array
  let usersObjs = [...new Set(secondUsersArray)] // unique users objects
  return usersObjs
}

const findCommittedGiftings = user =>
  user.giftings.filter(g => g.exchange_stat_id === 2)

const exchangesOfThisUser = (user, str, exchanges, myself) => {
  switch (str) {
    case 'double':
      return exchanges
        .filter(exchange => exchange.recipient_id === user.id)
        .concat(exchanges.filter(exchange => exchange.gifter_id === user.id))
    case 'recipient':
      return exchanges.filter(exchange => exchange.recipient_id === user.id)
      break
    case 'gifter':
      return exchanges.filter(exchange => exchange.gifter_id === user.id)
      break
  }
}

// const giftingsOfThisRecipient = (recipient, giftingsOfThisGifter) => {
//   return giftingsOfThisGifter.filter(
//     gifting => gifting.recipient_id === recipient.id
//   )
// }
// const findUniqueRecipientsObjectsFromGiftings = (giftings, users) => {
//   const r = []
//   giftings.map(g => r.push(users.find(u => u.id === g.recipient_id)))
//   const recipients = [...new Set(r)] // unique recipients
//   return recipients
// }

const applyFilters = props => {
  const myReceivings = props.user.receivings
  const myCommittedGiftings = findCommittedGiftings(props.user)
  switch (props.scheduleFilter) {
    case 'giftings':
      return myCommittedGiftings
    case 'receivings':
      return myReceivings
    default:
      return myReceivings.concat(myCommittedGiftings).flat()
  }
}

const sortExchangesAccordingly = props => {
  const exchangesToMap = applyFilters(props)
  exchangesToMap.sort((a, b) => {
    if (DATE.convert(a.date) > DATE.convert(b.date)) return 1
    if (DATE.convert(a.date) < DATE.convert(b.date)) return -1
    if (DATE.convert(a.date) === DATE.convert(b.date)) return 0
  })

  return exchangesToMap
}

const ScheduleContainer = props => {
  const classes = useStyles()
  if (Object.keys(props.user).length > 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {renderCommittedExchanges(props)}
          {/* {renderCommittedGiftings(props)} */}

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
