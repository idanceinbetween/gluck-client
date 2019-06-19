import React from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core/'

const useStyles = makeStyles({
  card: {
    maxWidth: 200
  }
})

const LocationCard = ({ location }) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography fontWeight='fontWeightMedium'>
              {location.label}
            </Typography>
            <Typography variant='body2' color='textPrimary'>
              {location.address} {location.city} {location.postcode}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Edit
          </Button>
          <Button size='small' color='primary'>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default LocationCard
