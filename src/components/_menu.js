import React, { Fragment } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { ListItem, Link, Typography } from '@material-ui/core'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import { makeStyles } from '@material-ui/core/styles'
import Home from '@material-ui/icons/Home'

const Menu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleAcctMenuOpen(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMenuClose() {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  return (
    <Fragment>
      <Link component={RouterLink} to='/' color='inherit'>
        <Home />
      </Link>
      <Link component={RouterLink} to='/gifts' color='inherit'>
        Gifts
      </Link>
      <Link component={RouterLink} to='/about' color='inherit'>
        About
      </Link>
    </Fragment>
  )
}

export default Menu
