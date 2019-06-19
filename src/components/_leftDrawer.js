import React from 'react'
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  Typography,
  InputBase
} from '@material-ui/core'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const drawerWidth = 220
const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  // searchIcon: {
  //   width: theme.spacing(10),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 150
    }
  }
}))

const LeftDrawer = props => {
  const { container } = props
  const classes = useStyles()
  const theme = useTheme()
  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <List>
          <ListItem>
            <Typography variant='h5'>glūck</Typography>
          </ListItem>
        </List>
      </div>
      <Divider />
      <List>
        {/* <Menu handleDrawerToggle={props.handleDrawerToggle} /> */}
      </List>
      <List>
        <ListItem>
          <div className={classes.search}>
            <InputBase
              placeholder='Search Gift'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
          </div>
        </ListItem>
      </List>
    </div>
  )

  return (
    <nav className={classes.drawer} aria-label='Mailbox folders'>
      <Hidden smUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default LeftDrawer
