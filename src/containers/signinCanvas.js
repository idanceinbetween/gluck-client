import React, { Fragment } from 'react'

import { Grid } from '@material-ui/core'

import Signin from '../components/signin'
import SigninSubmenu from '../components/signinSubmenu'

const SigninCanvas = props => (
  <Fragment>
    <Grid item xs={9}>
      <Signin
        formToShow={props.formToShow}
        startEmail={props.startEmail}
        errorMessage={props.errorMessage}
        checkEmail={email => props.checkEmail(email)}
        signIn={credentials => props.signIn(credentials)}
        signUp={credentials => props.signUp(credentials)}
        users={props.users}
      />
    </Grid>
    <Grid item xs>
      <SigninSubmenu />
    </Grid>
  </Fragment>
)

export default SigninCanvas
