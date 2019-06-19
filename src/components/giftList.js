import React, { Fragment } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress
} from '@material-ui/core'
import DATE from '../Date'

const findGifter = (users, id) => {
  const foundGifter = users.find(u => u.id === id)
  if (foundGifter) {
    return foundGifter.username
  } else {
    return null
  }
}

const mapGiftsByExpiry = props => {
  let gifts = [...props.gifts].filter(gift => {
    return (
      gift.title.toLowerCase().includes(props.searchTerm.toLowerCase()) &&
      new Date(gift.expiry) > props.today
    )
  })

  if (gifts.length === 0) {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Subtitle</TableCell>
              <TableCell>Gifter</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Preferred Meeting</TableCell>
              <TableCell>Posting Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>Sorry, there are no results from your search.</TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  } else {
    if (props.sortByExpiry === 'asc') {
      // eslint-disable-next-line
      gifts.sort((a, b) => {
        let dateA = new Date(a.expiry)
        let dateB = new Date(b.expiry)
        if (dateA > dateB) return 1
        if (dateA < dateB) return -1
        if (dateA === dateB) return 0
      })
    } else if (props.sortByExpiry === 'dsc') {
      // eslint-disable-next-line
      gifts.sort((a, b) => {
        let dateA = new Date(a.expiry)
        let dateB = new Date(b.expiry)
        if (dateA > dateB) return -1
        if (dateA < dateB) return 1
        if (dateA === dateB) return 0
      })
    }
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Gifter</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Preferred Meeting</TableCell>
              <TableCell>Posting Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gifts.map(gift => (
              <TableRow key={gift.id}>
                <TableCell component='th' scope='row'>
                  <Link to={`/gifts/${gift.id}`} component={RouterLink}>
                    <b>{gift.title}</b>
                  </Link>
                </TableCell>
                <TableCell>
                  {props.users ? (
                    findGifter(props.users, gift.gifter_id)
                  ) : (
                    <CircularProgress />
                  )}
                </TableCell>
                <TableCell>{DATE.convert(gift.expiry)}</TableCell>
                <TableCell>
                  {gift.exchange1_location}
                  <br />
                  {gift.exchange1_datetime}
                </TableCell>
                <TableCell>{DATE.convert(gift.created_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

const GiftList = props => {
  if (props.gifts) {
    return (
      <Fragment>
        {props.gifts.length > 0 ? mapGiftsByExpiry(props) : null}
      </Fragment>
    )
  } else {
    return <CircularProgress />
  }
}

export default GiftList
