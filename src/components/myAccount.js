import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import CommsCard from './commsCard'
import LocationCard from './locationCard'
import UserTemplateCard from './user_templateCard'

const mapData = props => {
  if (Object.keys(props.user).length > 0) {
    let user = props.user
    return (
      <div>
        <h1>{user.username}'s Account</h1>
        <h2>Actions Summary</h2>
        {user.giftings.length > 0 && (
          <p>Giftings: {user.giftings.length} exchanges to take action!</p>
        )}
        {user.receivings.length > 0 && (
          <p>Receivings: {user.receivings.length} exchanges to take action!</p>
        )}
        {user.gifts.length > 0 && (
          <p>
            <b>{user.gifts.length}</b> Gifts
          </p>
        )}
        {/* {checkNoAction(user) && 'You have no actions to take!'} */}
        <h2>Account Management</h2>
        <h3>Your Username: {user.username}</h3>
        <h3>Your Email: {user.email}</h3>
        <p>Communications</p>
        {user.communications.length > 0 ? (
          user.communications.map(communication => (
            <CommsCard
              key={communication.id}
              communication={communication}
              pref_comm_id={user.pref_comm_id}
            />
          ))
        ) : (
          <div>You have no communications. Add one?</div>
        )}
        <p>Locations</p>
        {user.locations.length > 0 ? (
          user.locations.map(location => (
            <LocationCard key={location.id} location={location} />
          ))
        ) : (
          <div>You have no locations. Add one?</div>
        )}
        <p>User Templates</p>
        {user.user_templates.length > 0 ? (
          user.user_templates.map(user_template => (
            <UserTemplateCard
              key={user_template.id}
              user_template={user_template}
              locations={user.locations}
            />
          ))
        ) : (
          <div>You have no user templates. Add one?</div>
        )}
      </div>
    )
  } else {
    props.history.push('/signin')
  }
}

const MyAccount = props => {
  // const classes = useStyles()
  return <Fragment>{props.users.length > 0 && mapData(props)}</Fragment>
}

export default withRouter(MyAccount)
