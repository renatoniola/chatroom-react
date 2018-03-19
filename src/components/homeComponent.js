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
        {this.props.userArrayFiltered}
        <Link to='/signin'>signin</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ user, chat }) => {

  const current_user = user.email;
  const current_user_id = user._id;

  let usersArray =[];

  if(chat.chatrooms){

    chat.chatrooms.map(function(item){
       usersArray.push(item.users[0]);
       usersArray.push(item.users[1]);


    })
  }


  let userArrayFiltered = usersArray.filter( function (item) {
    return item != current_user_id._id
  })

  return {
     current_user,
     chat,
     userArrayFiltered
  }
}


export default withRouter(connect(mapStateToProps,{ getChats })(HomeComponent))
