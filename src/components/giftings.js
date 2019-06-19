import React, { Component, Fragment } from 'react'
import { Button, CircularProgress } from '@material-ui/core'

class Giftings extends Component {
  state = {}

  findGiftObjectByGifting = gifting => {
    if (this.props.users) {
      const gifter = this.props.users.find(
        user => user.id === gifting.gifter_id
      )

      if (gifter) {
        return gifter.gifts.find(gift => gift.id === gifting.gift_id)
      }
    }
  }

  renderGiftsNamesForThisRecipient = () =>
    this.props.giftingsOfThisRecipient.map(gifting => {
      const giftObject = this.findGiftObjectByGifting(gifting)
      if (giftObject) {
        return <li key={giftObject.id}>{giftObject.title}</li>
      } else {
        return <CircularProgress />
      }
    })

  render() {
    const {
      recipient,
      giftingsOfThisRecipient,
      commitGiftings,
      removeGiftings
    } = this.props
    return (
      <Fragment>
        {recipient && (
          <div>
            <h4>{recipient.username}</h4>
            <p>
              {this.renderGiftsNamesForThisRecipient(giftingsOfThisRecipient)}
            </p>
            <Button
              variant='contained'
              onClick={() => commitGiftings(giftingsOfThisRecipient)}
            >
              Commit
            </Button>
            <Button
              variant='contained'
              onClick={() => removeGiftings(giftingsOfThisRecipient)}
            >
              Remove
            </Button>
          </div>
        )}
      </Fragment>
    )
  }
}

export default Giftings
