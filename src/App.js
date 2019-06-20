import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css'
import API from './API'

import { CssBaseline } from '@material-ui/core'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'

import TopNav from './components/nav/topNav'
import About from './components/about'
import Landing from './components/landing'
import MainCanvas from './containers/mainCanvas'

const theme = createMuiTheme()

const styles = {
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1)
  }
}

class App extends Component {
  state = {
    users: [],
    user: {},
    gifts: [],
    today: new Date(),
    formToShow: '',
    startEmail: '',
    errorMessage: '',
    mobileOpen: false,
    pageTitle: 'Home',
    actionTabOpen: 0
  }

  componentDidMount() {
    API.fetchUsers().then(users => {
      this.setState(
        {
          users
        },
        () =>
          API.validate().then(data => {
            if (!data.error) {
              this.signIn(data.user, localStorage.getItem('token'))
            }
          })
      )
    })
    API.fetchGifts().then(gifts => {
      this.setState({ gifts })
    })

    const currPathname = this.props.location.pathname
    this.setPageTitle(currPathname)
  }

  checkEmail = email => {
    // eslint-disable-next-line
    const regexResult = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(
      email
    )
    if (email && regexResult) {
      const foundUser = this.state.users.find(user => user.email === email)
      if (foundUser) {
        this.setState({ formToShow: 'login', startEmail: foundUser.email })
      } else {
        this.setState({ formToShow: 'signup', startEmail: email })
      }
    } else {
      this.setState({
        errorMessage: 'Email is invalid, please try again.'
      })
    }
  }

  handleSignIn = credentials => {
    API.signIn(credentials).then(data => {
      if (data.error) {
        alert(`please try again: ${data.error}`)
      } else {
        localStorage.setItem('token', data.token)
        window.location.reload()
        this.signIn(data.user, localStorage.getItem('token'))
      }
    })
  }

  handleSignUp = credentials => {
    API.signUp(credentials).then(data => {
      if (data.error) {
        alert(`Didn't work somehow: ${data.error} `)
      } else {
        API.fetchUsers().then(users => {
          this.setState(
            {
              users
            },
            () => this.signIn(data.user, localStorage.getItem('token'))
          )
        })
      }
    })
  }

  signIn = (user, token) => {
    const foundUser = this.state.users.find(u => u.id === user.id)
    if (foundUser) {
      this.setState({ user: foundUser }, () => {
        if (this.props.history.location.pathname === '/start') {
          this.props.history.push('/action')
        }
      })
    } else {
      alert('Sorry something went wrong.')
      this.signOut()
    }
  }

  signOut = () => {
    this.setState({
      user: '',
      formToShow: '',
      startEmail: '',
      errorMessage: '',
      pageTitle: 'Home'
    })
    localStorage.removeItem('token')
    this.props.history.push('/')
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  changeTab1 = actionTabOpen => this.setState({ actionTabOpen })

  setPageTitle = pathname => {
    switch (pathname) {
      case '/':
        return this.setState({ pageTitle: '' })
      case '/about':
        return this.setState({ pageTitle: ' ' })
      case '/action':
        return this.setState({ pageTitle: 'Action Panel' })
      case '/schedule':
        return this.setState({ pageTitle: 'Exchange Schedule' })
      case '/myaccount':
        return this.setState({ pageTitle: 'Account Management' })
      case '/start':
        return this.setState({ pageTitle: 'Sign In or Sign Up' })
      case '/gifts/add':
        return this.setState({ pageTitle: ' ' })
      case '/gifts':
        return this.setState({ pageTitle: ' ' })
      default:
        return this.setState({ pageTitle: 'glūck' })
    }
  }

  componentDidUpdate(prevProps) {
    const prevPathname = prevProps.location.pathname
    const currPathname = this.props.location.pathname

    if (prevPathname === currPathname) return
    this.setPageTitle(currPathname)
  }

  changeFormToShow = str => {
    this.setState({ formToShow: str })
  }

  changeErrorMessage = str => {
    this.setState({ errorMessage: str })
  }

  render() {
    const {
      users,
      user,
      gifts,
      today,
      formToShow,
      startEmail,
      errorMessage,
      mobileOpen,
      actionTabOpen,
      pageTitle
    } = this.state
    const {
      handleDrawerToggle,
      signOut,
      checkEmail,
      handleSignIn,
      handleSignUp,
      changeTab1,
      changeFormToShow,
      changeErrorMessage
    } = this
    const { classes } = this.props
    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <TopNav
            theme={theme}
            user={user}
            pageTitle={pageTitle}
            signOut={signOut}
            mobileOpen={mobileOpen}
            changeTab1={value => changeTab1(value)}
            handleDrawerToggle={() => handleDrawerToggle()}
          />
          {this.props.location.pathname === '/' && (
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <div className={classes.root}>
                <Landing />
              </div>
            </main>
          )}
          {this.props.location.pathname === '/about' && <About />}
          {this.props.location.pathname !== '/' &&
            this.props.location.pathname !== '/about' && (
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <MainCanvas
                  users={users}
                  user={user}
                  gifts={gifts}
                  today={today}
                  formToShow={formToShow}
                  changeFormToShow={str => changeFormToShow(str)}
                  errorMessage={errorMessage}
                  changeErrorMessage={str => changeErrorMessage(str)}
                  startEmail={startEmail}
                  checkEmail={email => checkEmail(email)}
                  signIn={credentials => handleSignIn(credentials)}
                  signUp={credentials => handleSignUp(credentials)}
                  mobileOpen={mobileOpen}
                  handleDrawerToggle={() => handleDrawerToggle()}
                  tabValue={actionTabOpen}
                  changeTab1={value => changeTab1(value)}
                />
              </main>
            )}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(withStyles(styles, { WithTheme: true })(App))
