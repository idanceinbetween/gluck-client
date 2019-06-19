import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  Link,
  List,
  ListItem,
  // Link,
  Button,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Divider
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreIcon from '@material-ui/icons/MoreVert'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import Info from '@material-ui/icons/Info'

// import InputIcon from '@material-ui/icons/Input'
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

const calculateScheduled = user => {
  if (Object.keys(user).length > 0) {
    let giftingsTotal = user.giftings.filter(
      gifting => gifting.exchange_stat_id === 2
    )
    let receivingsTotal = user.receivings.filter(
      receiving => receiving.exchange_stat_id === 2
    )
    return giftingsTotal.concat(receivingsTotal).length
  } else {
    return 0
  }
}

const calculateActions = user => {
  if (Object.keys(user).length > 0) {
    return user.giftings.filter(gifting => gifting.exchange_stat_id === 1)
      .length
  } else {
    return 0
  }
}

const AccountMenu = props => {
  const classes = useStyles()
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
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link
        component={RouterLink}
        to='/myaccount'
        color='inherit'
        className={classes.link}
      >
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      </Link>
      <MenuItem
        onClick={event => {
          handleMenuClose(event)
          props.signOut()
        }}
      >
        Sign Out
      </MenuItem>
    </Menu>
  )

  const renderMobileMoreIcon = () => {
    return (
      <Fragment>
        <IconButton
          aria-label='Show more'
          aria-controls={mobileMenuId}
          aria-haspopup='true'
          onClick={handleMobileMenuOpen}
          color='inherit'
        >
          <MoreIcon />
        </IconButton>
        {renderMobileMenu}
      </Fragment>
    )
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link
        component={RouterLink}
        to='/gifts'
        color='inherit'
        className={classes.link}
        onClick={() => {
          handleMobileMenuClose()
        }}
      >
        <MenuItem>
          <IconButton
            aria-label='All Gifts'
            aria-controls='primary-search-account-menu'
            aria-haspopup='true'
            color='inherit'
          >
            <CardGiftcard />
          </IconButton>
          <p>All Gifts</p>
        </MenuItem>
      </Link>
      <Link
        component={RouterLink}
        to='/about'
        color='inherit'
        className={classes.link}
        onClick={() => {
          handleMobileMenuClose()
        }}
      >
        <MenuItem>
          <IconButton
            aria-label='All Gifts'
            aria-controls='primary-search-account-menu'
            aria-haspopup='true'
            color='inherit'
          >
            <Info />
          </IconButton>
          <p>About</p>
        </MenuItem>
      </Link>
      <Divider />
      <Link
        component={RouterLink}
        to='/schedule'
        color='inherit'
        className={classes.link}
        onClick={() => {
          handleMobileMenuClose()
        }}
      >
        <MenuItem>
          <IconButton
            aria-label='Show number of scheduled exchanges'
            color='inherit'
          >
            <Badge
              badgeContent={calculateScheduled(props.user)}
              color='secondary'
            >
              <SwapHorizontalCircleIcon />
            </Badge>
          </IconButton>
          <p>Exchange Schedule</p>
        </MenuItem>
      </Link>
      <Link
        component={RouterLink}
        to='/action'
        color='inherit'
        className={classes.link}
        onClick={() => {
          handleMobileMenuClose()
        }}
      >
        <MenuItem>
          <IconButton
            aria-label='Show number of exchanges to take action'
            color='inherit'
          >
            <Badge
              badgeContent={calculateActions(props.user)}
              color='secondary'
            />
            <AssignmentIcon />
          </IconButton>
          <p>My Action Panel</p>
        </MenuItem>
      </Link>
      <Link
        component={RouterLink}
        to='/gifts/add'
        color='inherit'
        className={classes.link}
        onClick={() => {
          handleMobileMenuClose()
        }}
      >
        <MenuItem>
          <IconButton aria-label='Add Gift' color='inherit'>
            <AddCircleIcon />
          </IconButton>
          <p>List A Gift</p>
        </MenuItem>
      </Link>
      <Link
        component={RouterLink}
        to='/myaccount'
        color='inherit'
        className={classes.link}
        onClick={() => {
          handleMobileMenuClose()
        }}
      >
        <MenuItem>
          <IconButton
            aria-label='Account of current user'
            aria-controls='primary-search-account-menu'
            aria-haspopup='true'
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
          <p>My Account</p>
        </MenuItem>
      </Link>
      <MenuItem
        onClick={event => {
          handleMenuClose(event)
          props.signOut()
        }}
      >
        <IconButton
          aria-label='Signout'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <PowerSettingsNew />
        </IconButton>
        <p>Sign Out</p>
      </MenuItem>
    </Menu>
  )

  const renderUserMenu = props => {
    return (
      <Fragment>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Link
            component={RouterLink}
            to='/gifts'
            color='inherit'
            className={classes.link}
          >
            <MenuItem id='menuText'>All Gifts</MenuItem>
          </Link>
          <Link
            component={RouterLink}
            to='/about'
            color='inherit'
            className={classes.link}
          >
            <MenuItem id='menuText'>About</MenuItem>
          </Link>
          <MenuItem id='menuCursor'>{' | '}</MenuItem>
          <Link
            component={RouterLink}
            to='/schedule'
            color='inherit'
            className={classes.link}
          >
            <IconButton
              aria-label='Show number of scheduled exchanges'
              color='inherit'
              onClick={() => props.changeTab(0)}
            >
              <Badge
                badgeContent={calculateScheduled(props.user)}
                color='secondary'
              >
                <SwapHorizontalCircleIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link
            component={RouterLink}
            to='/action'
            color='inherit'
            className={classes.link}
          >
            <IconButton
              aria-label='Show number of exchanges to take action'
              color='inherit'
              onClick={() => props.changeTab(1)}
            >
              <Badge
                badgeContent={calculateActions(props.user)}
                color='secondary'
              >
                <AssignmentIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link
            component={RouterLink}
            to='/gifts/add'
            color='inherit'
            className={classes.link}
          >
            <IconButton aria-label='Add a post' color='inherit'>
              <AddCircleIcon />
            </IconButton>
          </Link>
          <IconButton
            edge='end'
            aria-label='Account of current user'
            aria-controls={menuId}
            aria-haspopup='true'
            onClick={handleAcctMenuOpen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>{renderMobileMoreIcon()}</div>
        {renderMenu}
      </Fragment>
    )
  }

  const renderSigninMenu = props => {
    return (
      <Fragment>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <Link
            component={RouterLink}
            to='/gifts'
            color='inherit'
            className={classes.link}
          >
            <MenuItem>All Gifts</MenuItem>
          </Link>
          <Link
            component={RouterLink}
            to='/about'
            color='inherit'
            className={classes.link}
          >
            <MenuItem>About</MenuItem>
          </Link>
          <Link
            component={RouterLink}
            to='/start'
            color='inherit'
            className={classes.link}
          >
            <IconButton
              edge='end'
              aria-label='Sign up or Sign in'
              aria-controls={menuId}
              aria-haspopup='false'
              color='inherit'
            >
              <PowerSettingsNew />
            </IconButton>
          </Link>
        </div>
        <div className={classes.sectionMobile}>
          <Link
            component={RouterLink}
            to='/start'
            color='inherit'
            className={classes.link}
          >
            <IconButton
              edge='end'
              aria-label='Sign up or Sign in'
              aria-controls={menuId}
              aria-haspopup='false'
              color='inherit'
            >
              <PowerSettingsNew />
            </IconButton>
          </Link>
        </div>
      </Fragment>
    )
  }

  if (Object.keys(props.user).length > 0) {
    return <Fragment>{renderUserMenu(props)}</Fragment>
  } else {
    return <Fragment>{renderSigninMenu(props)}</Fragment>
  }
}

export default AccountMenu
