import React, { Component } from 'react'
import { connect } from 'react-redux'

import getChats from './../actions/chat/chat'
import authenticate from './../actions/user/auth'
import getUsers from './../actions/user/users'
import { withRouter,BrowserRouter ,Link } from 'react-router-dom'
import ListUsersPanel from './ListUsersPanel'
import MessageBoard from './MessageBoard'

class HomeComponent extends Component {

  constructor(props){
     super(props);
     this.state = {
       selectedUser : null
     }
  }

  componentDidMount(){

     this.props.authenticate()
     this.props.getChats()
     this.props.getUsers()



  }

  selectUser(id){
    console.log(id)
    this.setState({
       selectedUser : id
    })


  }
  render() {
    let messages = []
    let current_user_id =null
    if(this.props.chat.chatrooms){

      let selectedChat = this.props.chat.chatrooms.filter( (item) => {
          return item.users.includes(this.state.selectedUser)
      })

      if(selectedChat[0]){
        messages = selectedChat[0].messages;
      }


    }


    return (
      <div>

        <ListUsersPanel selectUser={ this.selectUser.bind(this) }users={this.props.otherUsers} current_user={ this.props.current_user } />
        <MessageBoard messages={messages} current_user_id={this.props.current_user_id}></MessageBoard>
      </div>
    )
  }
}

const mapStateToProps = ({ user, chat ,users }) => {

  const current_user = user.email;
  console.log(users)
  const current_user_id = user._id;

  let usersArray =[];

  if(chat.chatrooms){

    chat.chatrooms.map(function(item){
       usersArray.push(item.users[0]);
       usersArray.push(item.users[1]);


    })
  }

  let otherUsers = users.filter( (item) => {
    return item._id !== current_user_id
  })

  let userArrayFiltered = usersArray.filter( function (item) {

    return item !== current_user_id
  })



  return {
     current_user,
     current_user_id,
     chat,
     userArrayFiltered,
     otherUsers
  }
}


export default connect(mapStateToProps,{ getChats,authenticate, getUsers })(HomeComponent)
