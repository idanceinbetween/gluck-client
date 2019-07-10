import React, { Fragment } from 'react'
import { Chip, Grid, InputBase } from '@material-ui/core'
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
  },
  chip: {
    margin: theme.spacing(1)
  }
}))

const ListingsSubmenu = props => {
  const classes = useStyles()
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={5}>
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
        </Grid>
        <Grid item xs>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='flex-start'
          >
            <Grid item>
              Sort by:{' '}
              <Chip
                label='Expiring soonest'
                onClick={() => props.changeSortBy('asc')}
                className={classes.chip}
                color={props.sortBy === 'asc' ? 'secondary' : ''}
              />
              <Chip
                label='Expiring latest'
                onClick={() => props.changeSortBy('dsc')}
                className={classes.chip}
                color={props.sortBy === 'dsc' ? 'secondary' : ''}
              />
              <Chip
                label='Oldest listing first'
                onClick={() => props.changeSortBy('oldest')}
                className={classes.chip}
                color={props.sortBy === 'oldest' ? 'secondary' : ''}
              />
              <Chip
                label='Newest listing first'
                disabled
                onClick={() => props.changeSortBy('')}
                className={classes.chip}
                color={props.sortBy === '' ? 'secondary' : ''}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>

    // <h3>Listings Submenu</h3>
    // <div>
    //   <b>Sort by</b>
    //   <br />
    //   <i>Expiry date: </i>
    //   <Link onClick={() => props.sortBy('asc')}>Ascending</Link> |{' '}
    //   <Link onClick={() => props.sortBy('dsc')}>Descending</Link>
    //   <br />
    //   <i>Posting date: </i>
    //   <Link onClick={() => props.sortBy('')}>Oldest</Link>
    // </div>
    // <br />
    // <div>
    //   <form
    //   className={classes.search}
    //   onSubmit={event => {
    //     event.preventDefault()
    //     props.search()
    //   }}
    //   >
    //   <div className={classes.searchIcon}>
    //     <SearchIcon />
    //   </div>
    //   <InputBase
    //     placeholder='Search for a gift'
    //     classes={{
    //       root: classes.inputRoot,
    //       input: classes.inputInput
    //     }}
    //     inputProps={{ 'aria-label': 'Search' }}
    //     onChange={event => props.searchOnChange(event)}
    //     name='searchTerm'
    //     id='searchTerm'
    //     />
    // </form>
    // </div>
    //   <br />
    //   <Divider />
    //   <br />
    //   <i>Features coming soon</i>
    //   <div onClick={() => alert('Feature coming soon')}>
    //     <b>View As:</b> <br />
    //     List
    //     <Switch value='checked' color='default' disabled />
    //     Grid
    //   </div>
    //   <div onClick={() => alert('Feature coming soon')}>
    //     <p>
    //       <b>Show within 5 miles of Your Location:</b>
    //       <br /> Off
    //       <Switch value='checked' color='default' disabled />
    //       On
    //     </p>
    //   </div>
    // </Container>
  )
}

export default ListingsSubmenu
