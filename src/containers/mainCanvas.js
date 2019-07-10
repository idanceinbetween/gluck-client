import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom'

import GiftListCanvas from './giftListCanvas'
import SigninCanvas from './signinCanvas'
import MyAccountCanvas from './myAccountCanvas'
import ActionCanvas from '../components/action/actionCanvas'
import AddGiftCanvas from '../components/singleGift/addGiftCanvas'
import SingleGiftCanvas from '../components/singleGift/singleGiftCanvas'
import TestPage from '../test'

import { makeStyles } from '@material-ui/core/styles'

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
  const classes = useStyles()
  // const [mobileOpen, setMobileOpen] = React.useState(false)

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
            />
          )}
        />
        <Route
          exact
          path={['/action', '/schedule']}
          component={routerProps => (
            <ActionCanvas
              {...routerProps}
              user={props.user}
              users={props.users}
              gifts={props.gifts}
              tabValue={props.tabValue}
              changeTab1={value => props.changeTab1(value)}
            />
          )}
        />
        <Route
          exact
          path='/gifts/add'
          component={routerProps => <AddGiftCanvas user={props.user} />}
        />
        <Route
          exact
          path='/gifts/:id'
          component={routerProps => (
            <SingleGiftCanvas {...routerProps} user={props.user} />
          )}
        />
        <Route
          exact
          path='/start'
          component={routerProps => (
            <SigninCanvas
              {...routerProps}
              users={props.users}
              formToShow={props.formToShow}
              startEmail={props.startEmail}
              errorMessage={props.errorMessage}
              changeErrorMessage={str => props.changeErrorMessage(str)}
              checkEmail={email => props.checkEmail(email)}
              changeFormToShow={str => props.changeFormToShow(str)}
              signIn={credentials => props.signIn(credentials)}
              signUp={credentials => props.signUp(credentials)}
            />
          )}
        />
        <Route
          exact
          path='/test'
          component={routerProps => <TestPage {...routerProps} />}
        />
        {/* <Route
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
        /> */}
        <Route component={() => '404: Page Not Found'} />
      </Switch>
    </div>
  )
}

export default MainCanvas
