import { createStore, applyMiddleware } from 'redux'
import thunks from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunks)))

