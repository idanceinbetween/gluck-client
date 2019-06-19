import React, { Fragment, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import MyAccount from '../components/myAccount'
import MyAccountSubmenu from '../components/myAccountSubmenu'

function MyAccountCanvas(props) {
  useEffect(() => {
    if (!props.user) {
      props.history.push('/start')
    }
  })

  return (
    <Fragment>
      <Grid item xs={9}>
        <MyAccount user={props.user} users={props.users} />
      </Grid>
      <Grid item xs>
        <MyAccountSubmenu />
      </Grid>
    </Fragment>
  )
}

export default MyAccountCanvas
