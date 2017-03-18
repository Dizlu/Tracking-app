import { combineReducers } from 'redux'
import todoReducer from './todoReducer/todoReducer'

const mainReducer = combineReducers({
  todoReducer
})

export default mainReducer