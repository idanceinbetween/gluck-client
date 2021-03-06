import React from 'react'
import Schedule from './schedule'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, CircularProgress } from '@material-ui/core'
import DATE from '../../Date'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperRoot: {
    padding: theme.spacing(3, 2),
    maxWidth: 300
  }
}))

const calculateCompletedGiftings = user =>
  user.giftings.filter(gifting => gifting.exchange_stat_id === 4).length
const calculateCompletedReceivings = user =>
  user.receivings.filter(receiving => receiving.exchange_stat_id === 4).length

const renderCommittedExchanges = props => {
  const sortedExchanges = sortExchangesAccordingly(props)
  const users = findUniqueUsersObjectsFromExchanges(
    sortedExchanges,
    props.users,
    props.user
  )
  let recipientsIds = []
  // eslint-disable-next-line
  props.user.giftings.map(gifting => {
    recipientsIds.push(gifting.recipient_id)
  })
  let giftersIds = []
  // eslint-disable-next-line
  props.user.receivings.map(receiving => giftersIds.push(receiving.gifter_id))

  // eslint-disable-next-line
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
            changeTab1={value => props.changeTab1(value)}
            exchangeCancelledWith={userId =>
              props.exchangeCancelledWith(userId)
            }
            exchangeCompletedWith={userId =>
              props.exchangeCompletedWith(userId)
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
            changeTab1={value => props.changeTab1(value)}
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
  // eslint-disable-next-line
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

const findCommittedReceivings = user =>
  user.receivings.filter(g => g.exchange_stat_id === 2)

const exchangesOfThisUser = (user, str, exchanges, myself) => {
  switch (str) {
    case 'double':
      return exchanges
        .filter(exchange => exchange.recipient_id === user.id)
        .concat(exchanges.filter(exchange => exchange.gifter_id === user.id))
    case 'recipient':
      return exchanges.filter(exchange => exchange.recipient_id === user.id)
    case 'gifter':
      return exchanges.filter(exchange => exchange.gifter_id === user.id)
    default:
      return exchanges
        .filter(exchange => exchange.recipient_id === user.id)
        .concat(exchanges.filter(exchange => exchange.gifter_id === user.id))
  }
}

const applyFilters = props => {
  const myCommittedGiftings = findCommittedGiftings(props.user)
  const myCommittedReceivings = findCommittedReceivings(props.user)
  switch (props.scheduleFilter) {
    case 'giftings':
      return myCommittedGiftings
    case 'receivings':
      return myCommittedReceivings
    default:
      return myCommittedReceivings.concat(myCommittedGiftings).flat()
  }
}

const sortExchangesAccordingly = props => {
  // eslint-disable-next-line
  const exchangesToMap = applyFilters(props)
  // eslint-disable-next-line
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
          {/* {renderCommittedGiftings(props)} */}

          <Grid item md={3}>
            <Paper className={classes.paperRoot} elevation='10'>
              <div align='center'>
                <img
                  src={require('../../img/achievement.png')}
                  alt='achievement icon'
                  width='50%'
                />
                <Typography gutterBottom>
                  You have gifted{' '}
                  <h3>{calculateCompletedGiftings(props.user)}</h3> items, and
                  received <h3>{calculateCompletedReceivings(props.user)}</h3>{' '}
                  gifts to date!
                </Typography>
              </div>
            </Paper>
          </Grid>
          {renderCommittedExchanges(props)}
        </Grid>
      </div>
    )
  } else {
    return <CircularProgress />
  }
}

export default ScheduleContainer
