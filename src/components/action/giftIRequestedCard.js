import React, { Fragment } from 'react'

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core/'

const useStyles = makeStyles({
  card: {
    maxWidth: 400
  },
  media: {
    height: 140
  }
})

const findOwnerOfGift = (users, gift) =>
  users.find(user => user.id === gift.gifter_id)

const GiftIRequestedCard = ({ users, gift }) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            title={gift.title}
            image={gift.image}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {gift.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Gifter: {findOwnerOfGift(users, gift).username}
              <br />
              Listing Expiry: {`${new Date(gift.expiry).toDateString()}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size='small' color='primary'>
            Edit/Delete
          </Button>
          {calculateRequestsOfThisGift(user, gift) > 0 && (
            <Button size='small' color='primary' onClick={() => changeTab(1)}>
              Manage Gifting
            </Button>
          )}
        </CardActions> */}
      </Card>
    </Fragment>
  )
}

export default GiftIRequestedCard
