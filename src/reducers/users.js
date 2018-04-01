import { GOT_USERS } from './../actions/user/users'

export default (state = [], action = {}) => {
  switch(action.type) {


      case  GOT_USERS :

      return action.payload

    default :
      return state
  }
}
