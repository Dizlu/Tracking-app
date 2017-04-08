import todoConstants from './../constants/todoConstants'
import uuid from 'uuid'
/**
 * Todo actions
 * @param todo {Object}
 * @param todo.id {Uuid}
 * @param todo.text {String}
 * @param todo.completed {Boolean}
 */
const initialState = [];

/**
 * Reducer handling data flow between main store object and data
 * of todos in active list
 * @param {Object} state - current state of reducer part of store
 * @param {Object} action - action sent to reducer
 */
export default function todoReducer(state = initialState, action){
  switch (action.type) {
    case todoConstants.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: uuid.v1(),
          completed: false
        }
      ]
    case todoConstants.DELETE_TODO:
      return [
        ...state.filter((todo) => todo.id !== action.id)
      ]
    case todoConstants.TOGGLE_TODO:
      return [
        ...state.map((todo) => {
           return todo.id === action.id ? 
           {
             ...todo,
             completed: !todo.completed
           } : todo
        })
      ]
    default:
      return state
  }
}
