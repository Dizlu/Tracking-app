import { ADD_TODO } from './../../actions/todoActions/todoActions'
/**
 * Todo actions
 * @param todo {Object}
 * @param todo.id {Uuid}
 * @param todo.text {String}
 * @param todo.completed {Boolean}
 */
const initialState = [];
const toggleTodo = (todo) => {
  return todo.id
}

/**
 * Reducer handling data flow between main store object and data
 * of todos in active list
 * @param {Object} state - current state of reducer part of store
 * @param {Object} action - action sent to reducer
 */
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      return [
        ...state.filter((todo) => todo.id !== action.id)
      ]
    case 'TOGGLE_TODO':
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

export default todoReducer