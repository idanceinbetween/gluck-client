import React, { Component, Fragment } from 'react'

import { withRouter } from 'react-router-dom'
import { Grid, Tooltip, Typography, IconButton } from '@material-ui/core'

import CommsCard from './commsCard'
import LocationCard from './locationCard'
import UserTemplateCard from './user_templateCard'
import Info from '@material-ui/icons/Info'

import API from '../API'

// const mapData = props => {
//   if (Object.keys(props.user).length > 0) {
//     let user = props.user
//     return (
//       <div>
//         <Grid container name='main'>
//           <Grid item xs={12} name='firstRow'>
//             <h3>Your Username: {user.username}</h3>
//             <h3>Your Email: {user.email}</h3>
//           </Grid>
//           <Grid item xs={6} name='secondRowfirstCol'>
//             <Typography variant='h6'>
//               Communications
//               <Tooltip
//                 title="These are the different types of communications you'd like to
//               share with other users. You can choose a preferred mode of
//               communication."
//                 placement='right-start'
//               >
//                 <IconButton
//                   aria-label='Show more'
//                   aria-haspopup='true'
//                   color='inherit'
//                 >
//                   <Info />
//                 </IconButton>
//               </Tooltip>
//             </Typography>

//             <Grid container name='secondRowFirstColinner'>
//               {user.communications.length > 0 ? (
//                 user.communications.map(communication => (
//                   <Fragment>
//                     <Grid item name='firstcard'>
//                       <CommsCard
//                         key={communication.id}
//                         communication={communication}
//                         pref_comm_id={user.pref_comm_id}
//                       />
//                     </Grid>
//                     <Grid item xs={1} name='blank' />
//                   </Fragment>
//                 ))
//               ) : (
//                 <Grid item name='firstcard'>
//                   <div>You have no communications method stored.</div>
//                 </Grid>
//               )}
//             </Grid>
//           </Grid>
//           <Grid item xs={6} name='secondRowSecondcol'>
//             <Typography variant='h6'>
//               Locations
//               <Tooltip
//                 title="These are the locations that you'd like to save on file to be used
//               repeatedly."
//                 placement='right-start'
//               >
//                 <IconButton
//                   aria-label='Show more'
//                   aria-haspopup='true'
//                   color='inherit'
//                 >
//                   <Info />
//                 </IconButton>
//               </Tooltip>
//             </Typography>

//             <Grid container name='secondRowSecondColinner'>
//               {user.locations.length > 0 ? (
//                 user.locations.map(location => (
//                   <Fragment>
//                     <Grid item name='firstcard'>
//                       <LocationCard key={location.id} location={location} />
//                     </Grid>
//                     <Grid item xs={1} name='blank' />
//                   </Fragment>
//                 ))
//               ) : (
//                 <Grid item name='firstcard'>
//                   <div>You have no locations stored.</div>
//                 </Grid>
//               )}
//             </Grid>
//           </Grid>
//           <Grid item xs={6} name='secondRowfirstCol'>
//             <Typography variant='h6'>
//               User Templates (coming soon!)
//               <Tooltip
//                 title="These are the templates of messages that you'd like to use in your
//               communications with other users."
//                 placement='right-start'
//               >
//                 <IconButton
//                   aria-label='Show more'
//                   aria-haspopup='true'
//                   color='inherit'
//                 >
//                   <Info />
//                 </IconButton>
//               </Tooltip>
//             </Typography>

//             <Grid container name='secondRowFirstColinner'>
//               {user.user_templates.length > 0 ? (
//                 user.user_templates.map(user_template => (
//                   <Fragment>
//                     <Grid item name='firstcard'>
//                       <UserTemplateCard
//                         key={user_template.id}
//                         user_template={user_template}
//                         locations={user.locations}
//                       />
//                     </Grid>
//                     <Grid item xs={1} name='blank' />
//                   </Fragment>
//                 ))
//               ) : (
//                 <Grid item name='secondcard'>
//                   <div>You have no user templates stored.</div>
//                 </Grid>
//               )}
//             </Grid>
//           </Grid>
//           <Grid item xs={6} name='secondRowSecondcol'>
//             <Grid container name='secondRowSecondColinner'>
//               <Grid item name='firstcard' />
//               <Grid item name='secondcard' />
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//     )
//   } else {
//     props.history.push('/start')
//   }
// }

// const MyAccount = props => {
//   return <Fragment>{props.users.length > 0 && mapData(props)}</Fragment>
// }

// export default withRouter(MyAccount)

class MyAccount extends Component {
  componentDidMount() {
    API.validate().then(data => {
      if (data.error) {
        this.props.history.push('/start')
      }
    })
  }

  mapData = props => {
    if (Object.keys(props.user).length > 0) {
      let user = props.user
      return (
        <div>
          <Grid container name='main'>
            <Grid item xs={12} name='firstRow'>
              <h3>Your Username: {user.username}</h3>
              <h3>Your Email: {user.email}</h3>
            </Grid>
            <Grid item xs={6} name='secondRowfirstCol'>
              <Typography variant='h6'>
                Communications
                <Tooltip
                  title="These are the different types of communications you'd like to
                share with other users. You can choose a preferred mode of
                communication."
                  placement='right-start'
                >
                  <IconButton
                    aria-label='Show more'
                    aria-haspopup='true'
                    color='inherit'
                  >
                    <Info />
                  </IconButton>
                </Tooltip>
              </Typography>

              <Grid container name='secondRowFirstColinner'>
                {user.communications.length > 0 ? (
                  user.communications.map(communication => (
                    <Fragment>
                      <Grid item name='firstcard'>
                        <CommsCard
                          key={communication.id}
                          communication={communication}
                          pref_comm_id={user.pref_comm_id}
                        />
                      </Grid>
                      <Grid item xs={1} name='blank' />
                    </Fragment>
                  ))
                ) : (
                  <Grid item name='firstcard'>
                    <div>You have no communications method stored.</div>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={6} name='secondRowSecondcol'>
              <Typography variant='h6'>
                Locations
                <Tooltip
                  title="These are the locations that you'd like to save on file to be used
                repeatedly."
                  placement='right-start'
                >
                  <IconButton
                    aria-label='Show more'
                    aria-haspopup='true'
                    color='inherit'
                  >
                    <Info />
                  </IconButton>
                </Tooltip>
              </Typography>

              <Grid container name='secondRowSecondColinner'>
                {user.locations.length > 0 ? (
                  user.locations.map(location => (
                    <Fragment>
                      <Grid item name='firstcard'>
                        <LocationCard key={location.id} location={location} />
                      </Grid>
                      <Grid item xs={1} name='blank' />
                    </Fragment>
                  ))
                ) : (
                  <Grid item name='firstcard'>
                    <div>You have no locations stored.</div>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={6} name='secondRowfirstCol'>
              <Typography variant='h6'>
                User Templates (coming soon!)
                <Tooltip
                  title="These are the templates of messages that you'd like to use in your
                communications with other users."
                  placement='right-start'
                >
                  <IconButton
                    aria-label='Show more'
                    aria-haspopup='true'
                    color='inherit'
                  >
                    <Info />
                  </IconButton>
                </Tooltip>
              </Typography>

              <Grid container name='secondRowFirstColinner'>
                {user.user_templates.length > 0 ? (
                  user.user_templates.map(user_template => (
                    <Fragment>
                      <Grid item name='firstcard'>
                        <UserTemplateCard
                          key={user_template.id}
                          user_template={user_template}
                          locations={user.locations}
                        />
                      </Grid>
                      <Grid item xs={1} name='blank' />
                    </Fragment>
                  ))
                ) : (
                  <Grid item name='secondcard'>
                    <div>You have no user templates stored.</div>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item xs={6} name='secondRowSecondcol'>
              <Grid container name='secondRowSecondColinner'>
                <Grid item name='firstcard' />
                <Grid item name='secondcard' />
              </Grid>
            </Grid>
          </Grid>
        </div>
      )
    } else {
      props.history.push('/start')
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.users.length > 0 && this.mapData(this.props)}
      </Fragment>
    )
  }
}

export default withRouter(MyAccount)
