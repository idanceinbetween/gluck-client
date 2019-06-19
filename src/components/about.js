import React, { useEffect } from 'react'
import { withRouter, NavLink as RouterLink } from 'react-router-dom'

import { Container, Paper, Typography } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './logo'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

const About = props => {
  useEffect(() => props.setPageTitle(props.location.pathname))
  const classes = useStyles()
  return (
    <Container
      maxWidth='lg'
      style={{ backgroundColor: '#fff', height: '100vh' }}
    >
      <Typography
        component='div'
        style={{ backgroundColor: '#fff', height: '100vh' }}
      >
        <Logo />
        <p>
          <b>glūck</b> manages the gifting of your unwanted items; <i>easily</i>
          , <b>happily</b>.
        </p>
        <p>
          We know that listing your unwanted item is only the first step, so we
          built glūck to takes out the hassle of what follows.
        </p>
        <p> With glūck, you could:</p>
        <li>
          Easily decide who you want to gift the item to, should you get
          multiple requesters.
        </li>
        <li>
          View your exchange schedule, so you know where and when the exchange
          takes place, who you are meeting and what you are gifting.
        </li>
        <li>Communicate with requesters efficiently.</li>
        <h4>Because gifting should make you happy, too.</h4>
      </Typography>
      {/* </Paper> */}
    </Container>
  )
}

export default withRouter(About)
