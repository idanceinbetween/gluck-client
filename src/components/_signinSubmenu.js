import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

import { Container, List, ListItem, Link } from '@material-ui/core'

const SigninSubmenu = () => {
  return (
    <Container maxWidth='xs'>
      <List component='nav'>
        <ListItem>
          <Link component={RouterLink} to='/start'>
            Signin Submenu
          </Link>
        </ListItem>
      </List>
    </Container>
  )
}

export default SigninSubmenu
