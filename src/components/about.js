import React, { useEffect } from 'react'
import { withRouter, NavLink as RouterLink } from 'react-router-dom'

import { Container, Grid, Link, Typography, Button } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './logo'

const styles = {
  aboutContainer: {
    height: 1080,
    backgroundImage: `url(${'https://images.unsplash.com/photo-1513560193152-75fd429c9ed6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(103vw)`,
    margin: -10,
    padding: 20,
    opacity: 0.8
  }
}
//dark
//https://images.unsplash.com/photo-1464348123218-0ee63dfd2746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2028&q=80
//light
//https://images.unsplash.com/photo-1528029320621-f02197f47774?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
//vertical
//https://images.unsplash.com/photo-1513560193152-75fd429c9ed6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '1.2em'
  }
}))

const About = props => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={styles.aboutContainer}
    >
      <Grid item xs={2} className={classes.empty} />
      <Grid item xs={4}>
        <Typography className={classes.text}>
          <p>
            <b>glūck</b> manages the gifting of your unwanted items;
            <br /> <i>easily</i>, <b>happily</b>.
          </p>
          <p>
            Listing your unwanted item is only the first step,
            <br /> glūck takes out the hassle of what follows.
          </p>
          <li>
            Say goodbye to tracking conversations with multiple users about
            multiple items on spreadsheet or inbox.
          </li>
          <li>
            Offer items to users in one click, while other users who want the
            same item are automatically notified of your decision.
          </li>
          <p>Because gifting should make you happy, too.</p>
        </Typography>
        <Grid container direction='row'>
          <Grid item xs />
          <Grid item xs={6} id='bluebox' alignItems='center' id='buttonCenter'>
            <Link component={RouterLink} to='/action'>
              <Button variant='contained' color='secondary'>
                Start
              </Button>
            </Link>
          </Grid>
          <Grid item xs />
        </Grid>
      </Grid>
      <Grid item xs={4} className={classes.empty} />
    </Grid>
  )
}

export default withRouter(About)
