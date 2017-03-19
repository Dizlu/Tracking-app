import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import todoData from './reducers/todoData/todoData'

const logger = createLogger({ diff: false})
const reducers = combineReducers({
    todo: todoData
})
const middlewares = applyMiddleware(thunk, logger)

export default compose(
    middlewares
)(createStore)(reducers)