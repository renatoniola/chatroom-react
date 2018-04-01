import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import io from 'socket.io-client'
import reducers from './reducers'
import getChats from './actions/chat/chat'
const reducer = combineReducers(reducers)
const socket = io.connect('http://localhost:3030')

socket.on('connect', () => {
  console.log('client connected');
})

socket.on('disconnect', () => {
  console.log('client disconnected');
})
socket.on('MESSAGE_SENT', (data) => {

  getChats();
})
const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

export const history = createHistory()

const middleware = [
  routerMiddleware(history),
  ReduxThunk
]

const enhancer = compose(
  applyMiddleware(...middleware),
  devTools
)

const store = createStore(reducer, enhancer)

export default store
