import React, { Component } from 'react'

import { Grid, Container } from '@material-ui/core'

import GiftList from '../components/listings/giftList'
import GiftListSubmenu from '../components/giftListSubmenu'

class GiftListCanvas extends Component {
  state = {
    sortBy: '',
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

  changeSortBy = str => this.setState({ sortBy: str })

  render() {
    const { sortBy, searchTerm } = this.state
    const { today, gifts, users } = this.props
    const { changeSortBy, search, searchOnChange } = this
    return (
      <Container>
        <h1>All Gifts</h1>
        <Grid item xs={12}>
          <GiftListSubmenu
            changeSortBy={str => changeSortBy(str)}
            sortBy={sortBy}
            search={event => search(event)}
            searchOnChange={event => searchOnChange(event)}
          />
        </Grid>
        <Grid item xs={12} name='list holder'>
          <Grid container name='list holder innercon' />
          <Grid item xs={12}>
            <GiftList
              today={today}
              gifts={gifts}
              users={users}
              searchTerm={searchTerm}
              sortBy={sortBy}
            />
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default GiftListCanvas
