import React, { useEffect } from 'react'
import { withRouter, NavLink as RouterLink } from 'react-router-dom'
import { Button, Typography, Grid, Link } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

const styles = {
  landingContainer: {
    height: 1020,
    backgroundImage: `url(${'https://images.unsplash.com/photo-1512418490979-92798cec1380?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw)`,
    margin: -8,
    padding: 24
  }
}

const useStyles = makeStyles(theme => ({
  empty: {
    padding: theme.spacing(2),
    textAlign: 'left'
  },
  title: {
    textAlign: 'center'
  }
}))

const Landing = props => {
  useEffect(() => props.setPageTitle(props.location.pathname))
  const classes = useStyles()
  return (
    <Grid
      container
      justify='flex-end'
      alignItems='right'
      style={styles.landingContainer}
    >
      <Grid container justify='center'>
        <Grid item xs={5} className={classes.empty} />

        <Grid xs={6} id='container2' container className='main-content-area'>
          <Grid container id='pic' alignItems='flex-end' id='text'>
            <Grid item xs={12} id='text' className={classes.title}>
              <Typography id='landingTitle'>glūck</Typography>
              <Typography id='landingTagline'>gifting made happy</Typography>
              <Link component={RouterLink} to='/about'>
                <Button variant='contained' color='secondary'>
                  Find Out More
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={12} id='text' className={classes.title} />
        </Grid>
        <Grid item xs={1} className={classes.empty} />
      </Grid>
    </Grid>
  )
}

export default withRouter(Landing)
