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
    maxWidth: 250
  }
})

const findLocationName = (locations, id) =>
  locations.find(l => l.id === id).label

const UserTemplateCard = ({ user_template, locations }) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography fontWeight='fontWeightMedium'>
              {user_template.label}
            </Typography>
            <Typography variant='body2' color='textPrimary'>
              {user_template.content}
            </Typography>
            {user_template.location_id && (
              <Typography variant='body2' color='textPrimary'>
                Related to:{' '}
                {findLocationName(locations, user_template.location_id)}
              </Typography>
            )}
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

export default UserTemplateCard
