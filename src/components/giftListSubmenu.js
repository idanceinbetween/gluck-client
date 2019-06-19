import React from 'react'
import { Container, Switch, Link, InputBase, Divider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}))

const ListingsSubmenu = props => {
  const classes = useStyles()
  return (
    <Container maxWidth='xs'>
      <h3>Listings Submenu</h3>
      <div>
        <b>Sort by</b>
        <br />
        <i>Expiry date: </i>
        <Link onClick={() => props.sortByExpiry('asc')}>Ascending</Link> |{' '}
        <Link onClick={() => props.sortByExpiry('dsc')}>Descending</Link>
        <br />
        <i>Posting date: </i>
        <Link onClick={() => props.sortByExpiry('')}>Oldest</Link>
      </div>
      <br />
      <div>
        <form
          className={classes.search}
          onSubmit={event => {
            event.preventDefault()
            props.search()
          }}
        >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search for a gift'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'Search' }}
            onChange={event => props.searchOnChange(event)}
            name='searchTerm'
            id='searchTerm'
          />
        </form>
      </div>
      <br />
      <Divider />
      <br />
      <i>Features coming soon</i>
      <div onClick={() => alert('Feature coming soon')}>
        <b>View As:</b> <br />
        List
        <Switch value='checked' color='default' disabled />
        Grid
      </div>
      <div onClick={() => alert('Feature coming soon')}>
        <p>
          <b>Show within 5 miles of Your Location:</b>
          <br /> Off
          <Switch value='checked' color='default' disabled />
          On
        </p>
      </div>
    </Container>
  )
}

export default ListingsSubmenu
