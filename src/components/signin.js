import React, { Component, Fragment } from 'react'
import { TextField, Grid, Button, CircularProgress } from '@material-ui/core/'
import { usePickerState } from '@material-ui/pickers'

class Signin extends Component {
  state = {
    email: '',
    password: '',
    formToShow: '',
    username: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {
    if (this.props.startEmail) {
      this.setState({ email: this.props.startEmail })
    }
  }

  renderStartPage = ({ checkEmail, errorMessage }) => {
    return (
      <Fragment>
        <h1 align='center'>Let's get started!</h1>
        <p>What is your email address?</p>
        <p style={{ color: 'red' }}>{errorMessage}</p>
        <form
          onSubmit={event => {
            event.preventDefault()
            checkEmail(this.state.email)
          }}
        >
          <TextField
            id='email'
            name='email'
            placeholder='email@email.com'
            value={this.state.email}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />

          <Button variant='contained' type='submit' color='secondary'>
            Get Started
          </Button>
        </form>
      </Fragment>
    )
  }

  renderSigninForm = ({ signIn }) => {
    return (
      <Fragment>
        <h1>Welcome back, glūcker!</h1>
        <p>Please sign in with your password.</p>
        <form
          onSubmit={event => {
            event.preventDefault()
            signIn({ email: this.state.email, password: this.state.password })
          }}
        >
          <TextField
            id='email'
            name='email'
            placeholder='email@email.com'
            value={this.state.email}
            onChange={this.handleChange}
            margin='normal'
            disabled
          />
          <br />

          <TextField
            id='password'
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />
          <Button variant='contained' type='submit' color='secondary'>
            Login
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => this.props.changeFormToShow('')}
          >
            Go back
          </Button>
        </form>
      </Fragment>
    )
  }

  renderSignupForm = ({ email, signUp, users }) => {
    return (
      <Fragment>
        <h1>Hey there, welcome!</h1>
        <p>Looks like it's your first time here! Please sign up.</p>
        <form
          onSubmit={event => {
            event.preventDefault()
            if (users.find(user => user.username === this.state.username)) {
              this.props.changeErrorMessage(
                'username already exists, please choose a different username'
              )
            } else {
              signUp({
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
              })
            }
          }}
        >
          <TextField
            id='email'
            name='email'
            placeholder={email}
            value={this.state.email}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />
          <TextField
            id='password'
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
            margin='normal'
          />
          <p>Pick a username (you can't change this later)</p>
          <p style={{ color: 'red' }}>{this.props.errorMessage}</p>
          <TextField
            id='username'
            type='username'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
            margin='normal'
          />
          <br />
          <Button variant='contained' type='submit' color='secondary'>
            Sign Up
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => this.props.changeFormToShow('')}
          >
            Go back
          </Button>
        </form>
      </Fragment>
    )
  }

  render() {
    if (this.props.formToShow !== null) {
      return (
        <Fragment>
          {!this.props.formToShow && this.renderStartPage(this.props)}
          {this.props.formToShow === 'login' &&
            this.renderSigninForm(this.props)}
          {this.props.formToShow === 'signup' &&
            this.renderSignupForm(this.props)}
        </Fragment>
      )
    } else {
      return <CircularProgress />
    }
  }
}

export default Signin
