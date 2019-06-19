import React from 'react'
import Giftings from '../components/giftings'

const renderGiftingsByRecipients = props => {
  const giftingsOfThisGifter = findGiftingObjects(props)
  const recipients = findUniqueRecipientsObjectsFromGiftings(
    giftingsOfThisGifter,
    props.users
  )
  return recipients.map(recipient => {
    return (
      <Giftings
        key={recipient.id}
        recipient={recipient}
        giftingsOfThisRecipient={giftingsOfThisRecipient(
          recipient,
          giftingsOfThisGifter
        )}
        users={props.users}
        commitGiftings={giftings => props.commitGiftings(giftings)}
        removeGiftings={giftings => props.removeGiftings(giftings)}
      />
    )
  })
}

const giftingsOfThisRecipient = (recipient, giftingsOfThisGifter) => {
  return giftingsOfThisGifter.filter(
    gifting => gifting.recipient_id === recipient.id
  )
}

const findGiftingObjects = ({ selectedGiftingsIds, gifter }) => {
  const giftings = []
  selectedGiftingsIds.map(id =>
    giftings.push(gifter.giftings.find(gifting => gifting.id === id))
  )
  return giftings
}

const findUniqueRecipientsObjectsFromGiftings = (giftings, users) => {
  const r = []
  giftings.map(g => r.push(users.find(u => u.id === g.recipient_id)))
  const recipients = [...new Set(r)] // unique recipients
  return recipients
}

const GiftingsContainer = props => {
  return (
    <div>
      <h3>Draft Giftings</h3>
      {renderGiftingsByRecipients(props)}
    </div>
  )
}

export default GiftingsContainer
