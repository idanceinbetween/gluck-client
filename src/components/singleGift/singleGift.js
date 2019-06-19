import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import DATE from '../../Date'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, CircularProgress, Typography, Button } from '@material-ui/core'
// import { withStyles, createMuiTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000
  },
  image: {
    width: 400,
    height: 400,
    top: -50
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%'
  },
  button: {
    margin: theme.spacing(0, 1),
    padding: theme.spacing(1, 1, 1, 1)
  }
}))

const renderOwnerButtons = props => {
  return (
    <Fragment>
      <Grid item xs={3} />
      <Grid item xs={6} id='centerContentInGrid'>
        <div>This is your item!</div>
      </Grid>
      <Grid item xs={3} />
      <Grid container alignItems='center'>
        <Grid item xs={2} />
        <Grid item xs>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            noWrap
            onClick={() => props.history.push('/action')}
          >
            Manage
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            size='small'
            variant='contained'
            color='secondary'
            noWrap
            onClick={() => props.handleEditMode()}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  )
}

const findThisGiftInMyReceivings = props => {
  if (props.user) {
    if (props.user.receivings.find(r => r.gift_id === props.gift.id)) {
      return true
    } else {
      return false
    }
  }
}

const renderNonOwnerButtons = (props, classes) => {
  if (findThisGiftInMyReceivings(props)) {
    return (
      <Fragment>
        <Grid container alignItems='center'>
          <Grid item xs={3} />
          <Grid item xs={6} id='centerContentInGrid'>
            <div>
              <b>Gifter: {props.giftOwner.username}</b>
            </div>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={6} id='centerContentInGrid'>
            <div>
              <Button
                size='small'
                variant='contained'
                color='secondary'
                noWrap
                className={classes.button}
                id='buttonCenter'
                disabled
              >
                Requested
              </Button>
            </div>
          </Grid>
          <Grid item xs={3}>
            {/* <Button
                      size='small'
                      variant='contained'
                      color='secondary'
                      className={classes.button}
                      noWrap
                      onClick={() => props.handleEditMode()}
                    >
                      View More Items by the same gifter
                    </Button> */}
          </Grid>
        </Grid>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <Grid container alignItems='center'>
          <Grid item xs={3} />
          <Grid item xs={6} id='centerContentInGrid'>
            <div>
              <b>Gifter: {props.giftOwner.username}</b>
            </div>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={6} id='centerContentInGrid'>
            <div>
              <Button
                size='small'
                variant='contained'
                color='secondary'
                noWrap
                className={classes.button}
                id='buttonCenter'
                // onClick={() => props.handleEditMode()}
              >
                Request
              </Button>
            </div>
          </Grid>
          <Grid item xs={3}>
            {/* <Button
                      size='small'
                      variant='contained'
                      color='secondary'
                      className={classes.button}
                      noWrap
                      onClick={() => props.handleEditMode()}
                    >
                      View More Items by the same gifter
                    </Button> */}
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const SingleGift = props => {
  const classes = useStyles()
  if (props.gift && props.giftOwner && props.user) {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs>
            <div>
              <Typography gutterBottom variant='h2'>
                {props.gift.title}
              </Typography>
              <Typography variant='subtitle2' gutterBottom>
                <b>DESCRIPTION:</b>
                <br /> {props.gift.description}
              </Typography>
              <br />
              <p>Expiry: {DATE.convert(props.gift.expiry)}</p>
              <p>Exchange Date/Time: {props.gift.exchange1_datetime}</p>
              <p>Exchange Location: {props.gift.exchange1_location}</p>
            </div>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5}>
            <Grid container>
              <Grid item>
                <img
                  className={classes.img}
                  alt={`${props.gift.title}`}
                  src={`${props.gift.image}`}
                />
              </Grid>
              {props.giftOwner.id === props.user.id
                ? renderOwnerButtons(props)
                : renderNonOwnerButtons(props, classes)}
              <Grid item xs={2} />
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    )
  } else {
    return <CircularProgress />
  }
}

export default withRouter(SingleGift)
