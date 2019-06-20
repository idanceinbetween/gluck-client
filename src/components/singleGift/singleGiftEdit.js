import 'date-fns'
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import API from '../../API'
import { Grid, Typography, TextField, Button } from '@material-ui/core/'
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
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1)
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
}

class SingleGiftEdit extends Component {
  state = {}

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/start')
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

  submitForm = () => {
    API.editGift(this.state).then(data => {
      if (data.error) {
        console.log('error')
      } else {
        alert('Your gift has been updated!')
        this.props.handleEditMode()
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
      exchange2_datetime,
      exchange2_location,
      expiry
    } = this.state
    const { submitForm, handleChange, handleDateChange } = this
    const { classes } = this.props
    return (
      <Grid
        container
        name='paper'
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs>
          <h1>Edit Your Gift</h1>

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
          <Typography gutterBottom variant='p'>
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
          <Typography gutterBottom variant='p'>
            Offer some availabilities to meet and exchange:
          </Typography>
          <Typography gutterBottom variant='p'>
            Date/Time:
          </Typography>
          <TextField
            id='exchange1_datetime'
            name='exchange1_datetime'
            value={exchange1_datetime}
            onChange={handleChange}
            margin='normal'
            placeholder='First option'
            helperText="E.g.: 'Office hours 9-5', 'weekday evenings', 'weekends'"
          />
          <Typography gutterBottom variant='p'>
            Meeting location:
          </Typography>
          <TextField
            id='exchange1_location'
            name='exchange1_location'
            value={exchange1_location}
            onChange={handleChange}
            margin='normal'
            placeholder='First option'
            helperText="E.g.: 'WC1R', 'Covent Garden', 'Waterloo station'"
          />
          <Typography gutterBottom variant='p'>
            Date/Time:
          </Typography>
          <TextField
            id='exchange2_datetime'
            name='exchange2_datetime'
            value={exchange2_datetime}
            onChange={handleChange}
            margin='normal'
            placeholder='Second option'
            helperText="E.g.: 'Office hours 9-5', 'weekday evenings', 'weekends'"
          />
          <Typography gutterBottom variant='p'>
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
        <Grid item xs={6}>
          {/* <Typography gutterBottom variant='p'>
            Add An Image:
          </Typography> */}
          <Grid container>
            <Grid item>
              <img
                className={classes.img}
                alt={`${title}`}
                src={`${image}`}
                width='300px'
              />
              <Typography variant='p'>
                Image edit feature coming soon!
              </Typography>
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
            <Grid container>
              <Grid item xs={3} />

              <Grid item xs={2} />
              <Grid item xs>
                <Button
                  size=''
                  variant='contained'
                  color='secondary'
                  noWrap
                  className={classes.button}
                  id='buttonCenter'
                  type='submit'
                  onClick={() => submitForm()}
                >
                  Edit
                </Button>
                <Button
                  size='large'
                  variant='contained'
                  noWrap
                  className={classes.button}
                  id='buttonCenter'
                  type='submit'
                  onClick={() => handleEditMode()}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(
  withStyles(styles, { WithTheme: true })(SingleGiftEdit)
)
