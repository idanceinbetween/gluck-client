import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import AddGift from './addGift'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 1000
  }
}))

const AddGiftCanvas = props => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
      >
        <Grid item xs>
          <Grid
            container
            direction='row-reverse'
            justify='flex-start'
            alignItems='flex-start'
          >
            <Grid item />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {/* <div style={{ backgroundColor: 'white' }}> */}
            <AddGift user={props.user} />
            {/* </div> */}
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
    </Fragment>
  )
}

export default withRouter(AddGiftCanvas)
