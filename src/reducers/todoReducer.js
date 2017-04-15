import todoConstants from './../constants/todoConstants'
import uuid from 'uuid'
/**
 * Todo actions
 * @param todo {Object}
 * @param todo.id {String}
 * @param todo.text {String}
 * @param todo.completed {Boolean}
 */
const initialState = [
  {
    id: 12312,
    text: 'some text broah',
    completed: true
  }, {
    id: 12312234,
    text: 'some text broah',
    completed: false
  }, {
    id: 12323412,
    text: 'some text broah',
    completed: true
  }
]

const generateUuid = () => uuid();

/**
 * Reducer handling data flow between main store object and data
 * of todos in active list
 * @param {Object} state - current state of reducer part of store
 * @param {Object} action - action sent to reducer
 */
export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case todoConstants.ADD_TODO:
      return [
        {
          text: action.text,
          id: generateUuid(),
          completed: false
        },
        ...state
      ]
    case todoConstants.DELETE_TODO:
      return [
        ...state.filter((todo) => todo.id !== action.id)
      ]
    case todoConstants.TOGGLE_TODO:
      return [
        ...state.map((todo) => {
          return todo.id === action.id ? {
            ...todo,
            completed: !todo.completed
          } : todo
        })
      ]
    //@TODO : make explicit set and unset or fix problems with synch on table
    default:
      return state
  }
}
