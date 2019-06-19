import 'date-fns'
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import API from '../API'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Link
} from '@material-ui/core/'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

class AddListing extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    gifter_id: this.props.user.id,
    expiry: '',
    listing_stat_id: 1,
    exchange1_datetime: '',
    exchange1_location: '',
    exchange2_datetime: '',
    exchange2_location: ''
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/signin')
    }
    this.props.setPageTitle(this.props.location.pathname)
  }

  shouldComponentUpdate(prevProps, prevState) {
    debugger
    if (prevProps.pageTitle === this.props.pageTitle) {
      return false
    }
  }

  submitForm = event => {
    event.preventDefault()
    API.addGift(this.state).then(data => {
      if (data.error) {
        alert(`${data.error} Internal server error.`)
      } else {
        this.props.history.push(`/gifts/${data.id}`)
      }
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleDateChange = date => {
    this.setState({ expiry: new Date(date).toISOString() })
  }

  render() {
    const { user } = this.props
    const {
      title,
      description,
      exchange1_datetime,
      exchange1_location,
      expiry,
      image
    } = this.state
    const { submitForm, handleChange, handleDateChange } = this
    // if (user && user.locations) {
    return (
      <Fragment>
        <h1>List A Gift</h1>
        <form onSubmit={submitForm}>
          <h4>Title</h4>
          <TextField
            id='title'
            name='title'
            value={title}
            onChange={handleChange}
            margin='normal'
          />
          <h4>Description</h4>
          <TextField
            id='description'
            name='description'
            value={description}
            onChange={handleChange}
            helperText='Describe the gift in detail including its condition, and any other info that you might want other glūckers to know'
            margin='normal'
          />
          <h4>Image URL</h4>
          <input
            accept='image/*'
            // className={classes.input}
            id='icon-button-file'
            type='file'
          />
          <label htmlFor='icon-button-file'>
            <IconButton
              color='primary'
              // className={classes.button}
              aria-label='Upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField
            id='image'
            name='image'
            value={image}
            onChange={handleChange}
            helperText='insert a URL'
            margin='normal'
          />
          {/* <h4>Where can the recipient pickup this item?</h4>
          <RadioGroup
            aria-label='Location'
            name='exchange1_location'
            value={exchange1_location}
            onChange={handleChange}
          >
            {user.locations.length > 0 && (
              <Fragment>
                <FormControlLabel
                  value={user.locations[0].postcode}
                  control={<Radio />}
                  label={`${user.locations[0].address}, ${
                    user.locations[0].city
                  }, ${user.locations[0].postcode} (${
                    user.locations[0].label
                  })`}
                />
                <FormControlLabel
                  value={user.locations[1].postcode}
                  control={<Radio />}
                  label={`${user.locations[1].address}, ${
                    user.locations[1].city
                  }, ${user.locations[1].postcode} (${
                    user.locations[1].label
                  })`}
                />
              </Fragment>
            )}
            {user.locations.length === 0 && (
              <Fragment>
                You don't have any addresses listed, please add this from
                <Link to='/myaccount'>My ACcount</Link>
              </Fragment>
            )}
          </RadioGroup> */}
          <h4>When are you available at your selected location?</h4>
          <TextField
            id='exchange1_datetime'
            name='exchange1_datetime'
            value={exchange1_datetime}
            onChange={handleChange}
            margin='normal'
          />
          <h4>When should this post expire?</h4>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin='normal'
              id='mui-pickers-date'
              label='Date picker'
              value={expiry}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>
          <p>
            <Button variant='contained' type='submit'>
              List this Gift
            </Button>
          </p>
        </form>
      </Fragment>
    )
    // } else {
    //   return <Fragment>Page loading...</Fragment>
    // }
  }
}

export default withRouter(AddListing)
