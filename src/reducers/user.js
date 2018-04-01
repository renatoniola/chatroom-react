import { USER_SIGNED_IN } from './../actions/user/signin'


export default (state = { }, action = {}) => {
  switch(action.type) {
    case  USER_SIGNED_IN :

      return action.payload

    
    default :
      return state
  }
}
