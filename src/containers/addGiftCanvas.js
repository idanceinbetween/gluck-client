import React, { Fragment, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { Grid, Button, Paper } from '@material-ui/core'

import AddGift from '../components/addGift'
import AddGiftSubmenu from '../components/addGiftSubmenu'

const AddGiftCanvas = props => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs>
          <Grid
            container
            direction='row-reverse'
            justify='flex-start'
            alignItems='flex-start'
          >
            <Grid item>
              <Button
                color='primary'
                onClick={() => this.props.history.push('/gifts')}
              >
                {' '}
                « Back to Listings
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Paper>
            {/* <Paper className={classes.paper}> */}
            <AddGift user={props.user} />
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
    </Fragment>
  )
}

export default withRouter(AddGiftCanvas)
