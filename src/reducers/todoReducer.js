import todoConstants from './../constants/todoConstants'
import uuid from 'uuid'
/**
 * Todo list actions
 * @param todoTitle {String} description of a todoList
 * @param todoId {String} identifier of an todos list
 * @param todoList.todo {Object}
 * @param todoList.todo.id {String}
 * @param todoList.todo.text {String}
 * @param todoList.todo.completed {Boolean}
 */
const generateUuid = () => uuid();
const initialState = [{
  todoList: [{id: 12312, text: 'some text broah', completed: true }],
  todoTitle: 'Some list title',
  todoId: generateUuid()
}]
const generateTodo = (text) => {
  return {
    text: text,
    id: generateUuid(),
    completed: false
  }
}

const generateTodoList = (title) => {
  return {
    todoList: [],
    todoTitle: '',
    todoId: generateUuid()
  }
}

/**
 * Reducer handling data flow between main store object and data
 * of todos in active list
 * @param {Object} state - current state of reducer part of store
 * @param {Object} action - action sent to reducer
 */
export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case todoConstants.ADD_TODO_LIST:
      return [
        generateTodoList(action.text),
        ...state
      ]
    case todoConstants.ADD_TODO:
      return [
        generateTodo(action.text),
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
