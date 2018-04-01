import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


export const GOT_USERS = 'GOT_USERS'

const api = new API()

export default (user) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('users', user)
      .then((res) => {

        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: GOT_USERS,
          payload: res.body
        })


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
