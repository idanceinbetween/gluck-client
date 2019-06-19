import React from 'react'
import { withRouter, Link as RouterLink } from 'react-router-dom'
import '../../App.css'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Home from '@material-ui/icons/Home'

import AccountMenu from './accountMenu'

const drawerWidth = 220

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButtonMain: {
    marginRight: theme.spacing(2)
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
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
          <Link
            component={RouterLink}
            to='/'
            color='inherit'
            className={classes.link}
          >
            <IconButton
              edge='start'
              className={classes.menuButtonMain}
              color='inherit'
              aria-label='Open drawer'
            >
              <Home />
            </IconButton>
          </Link>
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
