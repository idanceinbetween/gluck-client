import React, { Component, Fragment } from 'react'
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Button,
  CircularProgress
} from '@material-ui/core'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import API from '../API'
import DATE from '../Date'

import SingleGift from '../components/singleGift'
import SingleGiftEdit from '../components/singleGiftEdit'
import SingleGiftSubmenu from '../components/singleGiftSubmenu'

const theme = createMuiTheme()

const styles = {
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
    maxWidth: '100%',
    maxHeight: '100%'
  }
  // button: {
  //   margin: 'auto'
  // }
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

  handleEditSubmit = () => console.log('editing!')

  render() {
    const { gift, giftOwner, editMode } = this.state
    const { user, classes } = this.props
    const { handleEditMode, handleEditSubmit } = this
    return (
      <Fragment>
        <Paper className={classes.paper}>
          {gift && !editMode && (
            <SingleGift gift={gift} handleEditMode={handleEditMode} />
          )}
          {gift && editMode && (
            <SingleGiftEdit
              gift={gift}
              handleEditMode={handleEditMode}
              handleEditSubmit={obj => handleEditSubmit(obj)}
              user={user}
            />
          )}
          {!gift && <CircularProgress />}
        </Paper>
      </Fragment>
    )
  }
}

export default withStyles(styles, { WithTheme: true })(SingleGiftCanvas)
