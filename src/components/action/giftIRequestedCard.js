import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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

const GiftIRequestedCard = ({ users, gift, history }) => {
  const classes = useStyles()
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardActionArea onClick={() => history.push(`/gifts/${gift.id}`)}>
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
      </Card>
    </Fragment>
  )
}

export default withRouter(GiftIRequestedCard)
