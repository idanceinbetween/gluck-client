import React, { Fragment, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { Grid, Button } from '@material-ui/core'

import AddGift from './addGift'

const AddGiftCanvas = props => {
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
          <AddGift user={props.user} />
        </Grid>
        <Grid item xs />
      </Grid>
    </Fragment>
  )
}

export default withRouter(AddGiftCanvas)
