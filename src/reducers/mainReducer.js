import { combineReducers } from 'redux'
import todoData from './todoData'
import { routerReducer } from 'react-router-redux'

const mainReducer = combineReducers({
  todoData,
  routing: routerReducer
})

export default mainReducer