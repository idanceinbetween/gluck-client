import React, { Fragment } from 'react'
import DATE from '../Date'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  CircularProgress,
  Typography,
  ButtonBase,
  Button
} from '@material-ui/core'
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
    maxWidth: '100%',
    maxHeight: '100%'
  }
  // button: {
  //   margin: 'auto'
  // }
}))

const SingleGift = ({ gift, handleEditMode }) => {
  const classes = useStyles()
  return gift ? (
    <Fragment>
      <Grid container spacing={2} id='big_container'>
        <Grid item md id='text'>
          <Typography gutterBottom variant='subtitle1'>
            <b>TITLE:</b>
            <br /> {gift.title}
          </Typography>
          <Typography variant='body2' gutterBottom>
            <b>DESCRIPTION:</b>
            <br /> {gift.description}
          </Typography>
          <br />
          <p>
            Expiry:
            <br /> {DATE.convert(gift.expiry)}
          </p>
          <p>
            Exchange Date/Time:
            <br /> {gift.exchange1_datetime}
          </p>
          <p>
            Exchange Location:
            <br /> {gift.exchange1_location}
          </p>
        </Grid>
        <Grid container id='container2' md>
          <Grid container id='pic'>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={`${gift.title}`}
                src={`${gift.image}`}
              />
            </ButtonBase>
            <Grid container spacing={1}>
              <Grid item id='button'>
                <Button>Manage</Button>
              </Grid>
              <Grid item id='button' onClick={() => handleEditMode()}>
                <Button>Edit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  ) : (
    <CircularProgress />
  )
}

export default SingleGift
