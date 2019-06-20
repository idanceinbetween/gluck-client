import 'date-fns'
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import API from '../../API'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { TextField, Button, Grid, Typography } from '@material-ui/core/'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme()

const styles = {
  root: {
    display: 'flex'
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
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  }
}

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
      this.props.history.push('/start')
    }
  }

  submitForm = () => {
    API.addGift(this.state).then(data => {
      if (data.error) {
        alert(`${data.error} Internal server error.`)
      } else {
        window.location.reload()
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
      exchange2_datetime,
      exchange2_location,
      expiry,
      image
    } = this.state
    const { submitForm, handleChange, handleDateChange } = this
    const { classes } = this.props
    // if (user && user.locations) {
    return (
      <Grid
        container
        name='paper'
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs>
          <h1>Add A Gift</h1>
          <Typography gutterBottom variant='h5'>
            Title:
          </Typography>
          <TextField
            id='title'
            name='title'
            value={title}
            onChange={handleChange}
            margin='normal'
            variant='outlined'
            helperText='Give a short title for your item.'
          />
          <Typography gutterBottom variant='h5'>
            Description:
            <br />
            <TextField
              id='description'
              multiline
              name='description'
              rows='3'
              value={description}
              onChange={handleChange}
              margin='normal'
              helperText='Describe the gift in detail including its condition, and any other info about the gift that is important for other glūckers to know.'
              variant='outlined'
            />
          </Typography>
          {/* <Typography gutterBottom variant='h5'>
            Expiry:
          </Typography>
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
          </MuiPickersUtilsProvider> */}
          <Typography gutterBottom variant='h5'>
            Offer some availabilities to meet and exchange:
          </Typography>
          <Typography gutterBottom variant='h6'>
            Date/Time:
          </Typography>
          <TextField
            id='exchange1_datetime'
            name='exchange1_datetime'
            value={exchange1_datetime}
            onChange={handleChange}
            margin='normal'
            // variant='outlined'
            placeholder='First option'
            helperText="E.g.: 'Office hours 9-5', 'weekday evenings', 'weekends'"
          />
          <Typography gutterBottom variant='h6'>
            Meeting location:
          </Typography>
          <TextField
            id='exchange1_location'
            name='exchange1_location'
            value={exchange1_location}
            onChange={handleChange}
            margin='normal'
            placeholder='First option'
            // variant='outlined'
            helperText="E.g.: 'WC1R', 'Covent Garden', 'Waterloo station'"
          />
          <Typography gutterBottom variant='h6'>
            Date/Time:
          </Typography>
          <TextField
            id='exchange2_datetime'
            name='exchange2_datetime'
            value={exchange2_datetime}
            onChange={handleChange}
            margin='normal'
            placeholder='Second option'
            // variant='outlined'
            helperText="E.g.: 'Office hours 9-5', 'weekday evenings', 'weekends'"
          />
          <Typography gutterBottom variant='h6'>
            Meeting location:
          </Typography>
          <TextField
            id='exchange2_location'
            name='exchange2_location'
            value={exchange2_location}
            onChange={handleChange}
            margin='normal'
            placeholder='Second option'
            // variant='outlined'
            helperText="E.g.: 'WC1R', 'Covent Garden', 'Waterloo station'"
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Typography gutterBottom variant='h5'>
            Add An Image:
          </Typography>
          <Grid container>
            <Grid item>
              <div onClick={() => alert('Feature coming soon!')}>
                <input
                  accept='image/*'
                  disabled
                  id='icon-button-file'
                  type='file'
                />
                <label htmlFor='icon-button-file'>
                  <IconButton
                    color='primary'
                    aria-label='Upload picture'
                    component='span'
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
              <TextField
                id='image'
                name='image'
                value={image}
                onChange={handleChange}
                helperText='Insert a URL'
                margin='normal'
              />
            </Grid>
            <Grid item>
              <br />
              <Typography gutterBottom variant='h6'>
                When do you want this listing to expire?
              </Typography>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems='center'>
          <Grid item xs={3} />
          <Grid item xs={6} id='centerContentInGrid'>
            <div>
              <Button
                size='large'
                variant='contained'
                color='secondary'
                noWrap
                // className={classes.button}
                id='buttonCenter'
                type='submit'
                onClick={() => submitForm()}
              >
                Add Gift
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
                  // onClick={() => props.handleEditMode()}
                >
                  View More Items by the same gifter
                </Button> */}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(withStyles(styles, { WithTheme: true })(AddListing))

{
  /* <h4>Where can the recipient pickup this item?</h4>
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
          </RadioGroup> */
}
