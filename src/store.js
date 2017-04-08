import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import todoReducer from './reducers/todoReducer'

const logger = createLogger({ diff: false})
const middlewares = applyMiddleware(thunk, logger)
const reducers = combineReducers({
  todoReducer,
  routing: routerReducer,
  form: formReducer
})
export default compose(
    middlewares
)(createStore)(reducers)