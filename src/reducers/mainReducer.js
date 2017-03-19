import { combineReducers } from 'redux'
import todoData from './todoData/todoData'

const mainReducer = combineReducers({
  todoData
})

export default mainReducer