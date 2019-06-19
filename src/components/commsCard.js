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
import StarRate from '@material-ui/icons/StarRate'

const useStyles = makeStyles({
  card: {
    maxWidth: 200
  }
})

const CommsCard = ({ communication, pref_comm_id }) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography fontWeight='fontWeightMedium'>
              {communication.label}{' '}
              {parseInt(pref_comm_id) === communication.id && (
                <StarRate style={{ fontSize: 14 }} />
              )}
            </Typography>
            <Typography variant='body2' color='textPrimary'>
              {communication.content}
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

export default CommsCard
