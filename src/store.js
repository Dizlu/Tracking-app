import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import mainReducer from './reducers/mainReducer'

const logger = createLogger({ diff: false})

const middlewares = applyMiddleware(thunk, logger)

export default compose(
    middlewares
)(createStore)(mainReducer)