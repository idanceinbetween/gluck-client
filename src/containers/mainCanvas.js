import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom'

import GiftListCanvas from './giftListCanvas'
import SigninCanvas from './signinCanvas'
import MyAccountCanvas from './myAccountCanvas'
import ActionCanvas from './actionCanvas'
import AddGiftCanvas from './addGiftCanvas'
import SingleGiftCanvas from './singleGiftCanvas'
import ScheduleContainer from './scheduleContainer'
import TestPage from '../test'

import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 220
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const MainCanvas = props => {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  return (
    <div className={classes.root}>
      {/* <LeftDrawer
        user={props.user}
        mobileOpen={props.mobileOpen}
        handleDrawerToggle={() => props.handleDrawerToggle()}
        setPageTitle={path => props.setPageTitle(path)}
      /> */}
      <Switch>
        <Route
          exact
          path='/gifts'
          component={routerProps => (
            <GiftListCanvas
              {...routerProps}
              users={props.users}
              gifts={props.gifts}
              today={props.today}
              setPageTitle={path => props.setPageTitle(path)}
            />
          )}
        />
        <Route
          exact
          path='/myaccount'
          component={routerProps => (
            <MyAccountCanvas
              {...routerProps}
              user={props.user}
              users={props.users}
              setPageTitle={path => props.setPageTitle(path)}
            />
          )}
        />
        <Route
          exact
          path='/action'
          component={routerProps => (
            <ActionCanvas
              {...routerProps}
              user={props.user}
              users={props.users}
              gifts={props.gifts}
              setPageTitle={path => props.setPageTitle(path)}
            />
          )}
        />
        <Route
          exact
          path='/gifts/add'
          component={routerProps => (
            <AddGiftCanvas
              user={props.user}
              setPageTitle={path => props.setPageTitle(path)}
              pageTitle={props.pageTitle}
            />
          )}
        />
        <Route
          exact
          path='/gifts/:id'
          component={routerProps => (
            <SingleGiftCanvas
              {...routerProps}
              user={props.user}
              setPageTitle={path => props.setPageTitle(path)}
            />
          )}
        />
        <Route
          exact
          path='/signin'
          component={routerProps => (
            <SigninCanvas
              {...routerProps}
              users={props.users}
              formToShow={props.formToShow}
              startEmail={props.startEmail}
              errorMessage={props.errorMessage}
              checkEmail={email => props.checkEmail(email)}
              signIn={credentials => props.signIn(credentials)}
              signUp={credentials => props.signUp(credentials)}
              setPageTitle={path => props.setPageTitle(path)}
            />
          )}
        />
        <Route
          exact
          path='/test'
          component={routerProps => <TestPage {...routerProps} />}
        />
        <Route
          exact
          path='/schedule'
          component={routerProps => (
            <ScheduleContainer
              {...routerProps}
              user={props.user}
              users={props.users}
              gifts={props.gifts}
              setPageTitle={path => props.setPageTitle(path)}
            />
          )}
        />
        <Route component={() => '404: Page Not Found'} />
      </Switch>
    </div>
  )
}

export default MainCanvas
