import { GOT_CHATS } from './../actions/chat/chat'

export default (state = { }, action = {}) => {
  switch(action.type) {
    case  GOT_CHATS :
      return action.payload



    default :
      return state
  }
}
