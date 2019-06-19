import React, { Fragment } from 'react'
import { Container, Button, Link, CircularProgress } from '@material-ui/core'
import { NavLink as RouterLink } from 'react-router-dom'

const SingleGiftSubmenu = ({ gift, giftOwner, user }) => {
  if (giftOwner && user) {
    return (
      <Container maxWidth='xs'>
        <h3>Single Gift Submenu</h3>

        {giftOwner.id === user.id ? (
          <div>
            <p>This is your item! Go to Action Panel to manage this gift.</p>
            <Link to='/action' component={RouterLink}>
              <Button variant='contained' color='secondary'>
                Manage Gifting
              </Button>
            </Link>
          </div>
        ) : (
          <Fragment>
            <div>
              <Button variant='contained' color='secondary'>
                Request Gift
              </Button>
            </div>
            <h4>Other items by {giftOwner.username}</h4>
            {giftOwner.gifts
              .filter(l => l.id !== gift.id)
              .map(gift => {
                return (
                  <li key={gift.id}>
                    <Link to={`/gifts/${gift.id}`} component={RouterLink}>
                      {gift.title}
                    </Link>
                  </li>
                )
              })}
          </Fragment>
        )}
      </Container>
    )
  } else {
    return <CircularProgress />
  }
}

export default SingleGiftSubmenu
