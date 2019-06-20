import React from 'react'
import { withRouter, Link as RouterLink } from 'react-router-dom'
import '../../App.css'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Home from '@material-ui/icons/Home'

import AccountMenu from './accountMenu'

const drawerWidth = 220

const useStyles = makeStyles(theme => ({
  appBar: {
    marginLeft: drawerWidth,
    maxHeight: '64px',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  button: {
    marginRight: '60px'
  }
}))

const TopNav = props => {
  const classes = useStyles()
  return (
    <div>
      <AppBar
        position='fixed'
        className={classes.appBar}
        style={{ width: '100%' }}
      >
        <Toolbar>
          <Button
            size='large'
            color='inherit'
            className={classes.button}
            onClick={() => props.history.push('/')}
          >
            <img
              src={require('../../img/logo.png')}
              alt="gluck's logo"
              height='30px'
            />
            glūck
          </Button>
          <Typography variant='h6' noWrap id='menuText'>
            {props.pageTitle}
          </Typography>
          <AccountMenu
            user={props.user}
            signOut={props.signOut}
            changeTab1={value => props.changeTab1(value)}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(TopNav)
