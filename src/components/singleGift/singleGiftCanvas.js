import React, { Component, Fragment } from 'react'
import { Grid, Paper, Button, CircularProgress } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import API from '../../API'

import SingleGift from './singleGift'
import SingleGiftEdit from './singleGiftEdit'

const theme = createMuiTheme()

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(3),
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
    maxWidth: '100%',
    maxHeight: '100%'
  }
}

class SingleGiftCanvas extends Component {
  state = {
    editMode: false
  }

  componentDidMount() {
    API.fetchSingleGift(this.props.match.params.id).then(gift => {
      this.setState({ gift })
    })
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevState
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevState.gift && prevState.gift !== this.state.gift) {
      API.fetchOtherUser(this.state.gift.gifter_id).then(giftOwner => {
        this.addUserToState(giftOwner)
      })
    }
  }

  addUserToState = giftOwner => {
    this.setState({ giftOwner: giftOwner })
  }

  handleEditMode = () => this.setState({ editMode: !this.state.editMode })

  createExchange = exchangeObj => {
    API.createExchange(exchangeObj).then(data => {
      if (data.error) {
        alert(`Request error: ${data.error}. Please try again later.`)
      } else {
        alert('Gift successfully requested!')
        window.location.reload()
      }
    })
  }

  render() {
    const { gift, giftOwner, editMode } = this.state
    const { user, classes } = this.props
    const { handleEditMode, createExchange } = this
    return (
      <Fragment>
        <Grid container>
          <Grid item xs>
            <Grid
              container
              direction='row-reverse'
              justify='flex-start'
              alignItems='flex-start'
            >
              <Grid item>
                <Button
                  color='primary'
                  onClick={() => this.props.history.push('/gifts')}
                >
                  {' '}
                  « Back to Listings
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {gift && !editMode && (
                <SingleGift
                  gift={gift}
                  handleEditMode={handleEditMode}
                  giftOwner={giftOwner}
                  user={user}
                  handleCreateExchange={exchangeObj =>
                    createExchange(exchangeObj)
                  }
                />
              )}
              {gift && editMode && (
                <SingleGiftEdit
                  gift={gift}
                  handleEditMode={handleEditMode}
                  user={user}
                />
              )}
              {!gift && <CircularProgress />}
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </Fragment>
    )
  }
}

export default withRouter(
  withStyles(styles, { WithTheme: true })(SingleGiftCanvas)
)
