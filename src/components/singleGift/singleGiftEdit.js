import 'date-fns'
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import API from '../../API'
import {
  Grid,
  Typography,
  MenuItem,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Link,
  ButtonBase
} from '@material-ui/core/'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

const renderGiftsList = gifts => {
  if (gifts) {
    return gifts.map(gift => {
      return (
        <MenuItem key={gift.id} value={gift.id}>
          {gift.title}
        </MenuItem>
      )
    })
  } else return <MenuItem>You don't have any gifts to list.</MenuItem>
}

class SingleGiftEdit extends Component {
  state = {}

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/signin')
    }
    this.setState({
      title: this.props.gift.title,
      description: this.props.gift.description,
      exchange1_datetime: this.props.gift.exchange1_datetime,
      exchange1_location: this.props.gift.exchange1_location,
      expiry: this.props.gift.expiry,
      image: this.props.gift.image,
      id: this.props.gift.id
    })
  }

  submitForm = (props, event) => {
    event.preventDefault()
    API.editGift(this.state).then(data => {
      if (data.error) {
        console.log('error')
      } else {
        alert('Your gift has been updated!')
        props.handleEditMode()
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
    const { user, handleEditMode } = this.props
    const {
      title,
      description,
      image,
      exchange1_datetime,
      exchange1_location,
      expiry
    } = this.state
    const { submitForm, handleChange, handleDateChange } = this

    return (
      <Fragment>
        <Grid container spacing={2} id='big_container'>
          <form onSubmit={event => submitForm(this.props, event)}>
            <Grid item md id='text'>
              <Typography gutterBottom variant='subtitle1'>
                <b>TITLE:</b>
              </Typography>
              <br />
              <TextField
                id='title'
                name='title'
                value={title}
                onChange={handleChange}
                margin='normal'
              />
              <Typography variant='body2' gutterBottom>
                <b>DESCRIPTION:</b>
              </Typography>
              <br />
              <TextField
                id='description'
                label='Select'
                value={description}
                onChange={handleChange}
                helperText='Describe the gift in detail including its condition, and any other info that you might want other glūckers to know'
                margin='normal'
              />
              <p>Expiry:</p>
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
              <p>Exchange Date/Time:</p>
              <TextField
                id='exchange1_datetime'
                name='exchange1_datetime'
                value={exchange1_datetime}
                onChange={handleChange}
                margin='normal'
              />
              <p>Exchange Location:</p>
              <br />
              {user.locations && (
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
                      <Link to='/myaccount'>My Account</Link>.
                    </Fragment>
                  )}
                </RadioGroup>
              )}
            </Grid>
            <Grid container id='container2' md>
              <Grid container id='pic'>
                {/* <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt={`${gift.title}`}
                    src={`${gift.image}`}
                  />
                </ButtonBase> */}
                <Grid container spacing={1}>
                  <Grid item id='button'>
                    <Button variant='contained' type='submit'>
                      Submit Edits
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Fragment>
    )
  }
}

export default withRouter(SingleGiftEdit)
