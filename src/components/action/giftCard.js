import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
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

const calculateRequestsOfThisGift = (user, gift) =>
  user.giftings.filter(g => g.gift_id === gift.id).length

const GiftCard = ({ changeTab1, user, gift, history }) => {
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
              {calculateRequestsOfThisGift(user, gift) === 1 &&
                `Requested by ${calculateRequestsOfThisGift(
                  user,
                  gift
                )} member`}
              {calculateRequestsOfThisGift(user, gift) > 1 &&
                `Requested by ${calculateRequestsOfThisGift(
                  user,
                  gift
                )} members`}
              <br />
              Listing Expiry: {`${new Date(gift.expiry).toDateString()}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Edit/Delete
          </Button>
          {calculateRequestsOfThisGift(user, gift) > 0 && (
            <Button size='small' color='primary' onClick={() => changeTab1(1)}>
              Manage Gifting
            </Button>
          )}
        </CardActions>
      </Card>
    </Fragment>
  )
}

export default withRouter(GiftCard)
