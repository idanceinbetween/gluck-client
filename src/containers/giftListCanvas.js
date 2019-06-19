import React, { Component, Fragment } from 'react'

import { Grid } from '@material-ui/core'

import GiftList from '../components/giftList'
import GiftListSubmenu from '../components/giftListSubmenu'

class GiftListCanvas extends Component {
  state = {
    sortByExpiry: '',
    searchTerm: ''
  }

  search = () => {
    this.props.gifts.filter(listing =>
      listing.gift['title'].includes(this.state.searchTerm)
    )
  }

  searchOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  changeSortByExpiry = str => this.setState({ sortByExpiry: str })

  render() {
    const { sortByExpiry, searchTerm } = this.state
    const { bgcolor, today, gifts, users } = this.props
    const { search, searchOnChange } = this
    return (
      <Fragment>
        <Grid item xs={9}>
          <h1>All gifts</h1>
          <GiftList
            today={today}
            gifts={gifts}
            users={users}
            searchTerm={searchTerm}
            sortByExpiry={sortByExpiry}
          />
        </Grid>
        <Grid item xs>
          <GiftListSubmenu
            sortByExpiry={str => this.changeSortByExpiry(str)}
            search={event => search(event)}
            searchOnChange={event => searchOnChange(event)}
          />
        </Grid>
      </Fragment>
    )
  }
}

export default GiftListCanvas
