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
  // typography: {
  //   fontFamily: [
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // },
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
    pageTitle: 'Home'
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
        if (this.props.history.location.pathname === '/signin') {
          this.props.history.push('/myaccount')
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
    this.props.history.push('/signin')
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  setPageTitle = pathname => {
    switch (pathname) {
      case '/':
        return this.setState({ pageTitle: 'Home' })
      case '/about':
        return this.setState({ pageTitle: 'About' })
      default:
        return this.setState({ pageTitle: 'glūck' })
    }
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
      pageTitle
    } = this.state
    const {
      handleDrawerToggle,
      signOut,
      checkEmail,
      handleSignIn,
      handleSignUp,
      setPageTitle
    } = this
    const { classes } = this.props
    return (
      <Fragment>
        <div className={classes.root}>
          <CssBaseline />
          <TopNav
            theme={theme}
            pageTitle={pageTitle}
            user={user}
            signOut={signOut}
            mobileOpen={mobileOpen}
            handleDrawerToggle={() => handleDrawerToggle()}
          />
          {this.props.location.pathname === '/' && (
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <div className={classes.root}>
                <Landing setPageTitle={path => setPageTitle(path)} />
              </div>
            </main>
          )}
          {this.props.location.pathname === '/about' && (
            <About setPageTitle={path => setPageTitle(path)} />
          )}
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
                  errorMessage={errorMessage}
                  startEmail={startEmail}
                  pageTitle={pageTitle}
                  checkEmail={email => checkEmail(email)}
                  signIn={credentials => handleSignIn(credentials)}
                  signUp={credentials => handleSignUp(credentials)}
                  // setPageTitle={path => setPageTitle(path)}
                  setPageTitle={path => console.log(path)}
                  mobileOpen={mobileOpen}
                  handleDrawerToggle={() => handleDrawerToggle()}
                />
              </main>
            )}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(withStyles(styles, { WithTheme: true })(App))
