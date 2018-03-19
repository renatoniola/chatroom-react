import React, { Component } from 'react'
import { connect } from 'react-redux'
import getChats from './../actions/chat/chat'
import { withRouter,BrowserRouter ,Link } from 'react-router-dom'

class HomeComponent extends Component {

  componentWillMount(){

    this.props.getChats();

  }

  render() {
    return (
      <div>
        <Link to='/signin'>signin</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ user, chats }) => {

  const current_user = user.email;

  return {
     current_user,
     chats
  }
}


export default withRouter(connect(mapStateToProps,{ getChats })(HomeComponent))
