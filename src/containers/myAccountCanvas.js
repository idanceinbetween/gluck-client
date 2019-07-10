import React, { Fragment, useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MyAccount from '../components/auth/myAccount'

const styles = {
  myAccountContainer: {
    height: 1300,
    backgroundImage: `url(${'https://images.pexels.com/photos/64782/pexels-photo-64782.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: `calc(103vw)`,
    margin: -10,
    padding: 20,
    opacity: 0.8,
    backgroundAttachment: 'fixed'
  }
}
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(10, 0, 0)
  }
}))

function MyAccountCanvas(props) {
  const classes = useStyles()
  useEffect(() => {
    if (!props.user) {
      props.history.push('/start')
    }
  })
  return (
    <Fragment>
      <Grid
        container
        justify='center'
        alignItems='flex-start'
        style={styles.myAccountContainer}
      >
        <Grid container direction='row' justify='center' alignItems='flex-end'>
          <Grid item xs />
          <Grid item xs={7}>
            <Paper className={classes.root}>
              <MyAccount user={props.user} users={props.users} />
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default MyAccountCanvas
