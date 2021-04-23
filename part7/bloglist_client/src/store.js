import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, combineReducers, createStore } from 'redux'

import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store