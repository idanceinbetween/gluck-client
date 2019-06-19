import React, { Fragment, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { Grid } from '@material-ui/core'

import AddGift from '../components/addGift'
import AddGiftSubmenu from '../components/addGiftSubmenu'

const AddGiftCanvas = props => {
  return (
    <Fragment>
      <Grid item xs={9}>
        <AddGift user={props.user} />
      </Grid>
      <Grid item xs>
        <AddGiftSubmenu />
      </Grid>
    </Fragment>
  )
}

export default withRouter(AddGiftCanvas)
