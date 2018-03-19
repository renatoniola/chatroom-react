import API from '../../api/client'
import { replace,push } from 'react-router-redux'

import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
//import signIn from './signin'

export const GOT_CHATS = 'GOT_CHATS'

const api = new API()

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('chatrooms')
      .then((result) => {

        dispatch({ type : GOT_CHATS ,payload: result.body})
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        return api.get('users/me')

      })
      .catch((error) => {

        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })

      })
  }
}
