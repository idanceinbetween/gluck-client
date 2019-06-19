import React from 'react'
import { Grid } from '@material-ui/core'

const RightContainer = props => {
  return (
    <Grid
      item
      xs
      style={{ backgroundColor: props.bgcolor[100], height: '100vh' }}
    >
      This is the right container
    </Grid>
  )
}

export default RightContainer
