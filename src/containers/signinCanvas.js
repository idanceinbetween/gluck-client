import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

import Signin from '../components/auth/signin'

const styles = {
  startContainer: {
    height: 1080,
    backgroundImage: `url(${'https://images.unsplash.com/photo-1528029320621-f02197f47774?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(103vw)`,
    margin: -10,
    padding: 20,
    opacity: 0.8
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(10, 0, 0)
  }
}))

const SigninCanvas = props => {
  const classes = useStyles()
  return (
    <Fragment>
      <Grid
        container
        justify='center'
        alignItems='flex-start'
        style={styles.startContainer}
      >
        <Grid container direction='row' justify='center' alignItems='flex-end'>
          <Grid item xs />
          <Grid item xs={4}>
            <Paper className={classes.root}>
              <Signin
                formToShow={props.formToShow}
                changeFormToShow={str => props.changeFormToShow(str)}
                startEmail={props.startEmail}
                errorMessage={props.errorMessage}
                changeErrorMessage={str => props.changeErrorMessage(str)}
                checkEmail={email => props.checkEmail(email)}
                signIn={credentials => props.signIn(credentials)}
                signUp={credentials => props.signUp(credentials)}
                users={props.users}
              />
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </Grid>
    </Fragment>
  )
}
export default SigninCanvas
