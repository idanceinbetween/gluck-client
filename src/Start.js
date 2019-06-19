import API from './API'

class START {
  static checkEmail = email => {
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

  static handleSignIn = credentials => {
    API.signIn(credentials).then(data => {
      if (data.error) {
        alert(`please try again: ${data.error}`)
      } else {
        localStorage.setItem('token', data.token)
        this.signIn(data.user, localStorage.getItem('token'))
      }
    })
  }

  static handleSignUp = credentials => {
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

  static signIn = (user, token) => {
    const foundUser = this.state.users.find(u => u.id === user.id)
    if (foundUser) {
      this.setState({ user: foundUser }, () => {
        if (this.props.history.location.pathname === '/start') {
          this.props.history.push('/dashboard')
        }
      })
    } else {
      alert('Sorry something went wrong.')
      this.signOut()
    }
  }

  static signOut = () => {
    this.setState({
      user: '',
      formToShow: '',
      startEmail: '',
      errorMessage: ''
    })
    localStorage.removeItem('token')
    this.props.history.push('/start')
  }
}

export default START
