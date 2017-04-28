import todoConstants from './../constants/todoConstants'
import uuid from 'uuid'
/**
 * Todo list actions with multiple lists containing todos
 * @param listTitle {String} description of a todoList
 * @param listId {String} identifier of an todos list
 * @param list.todo {Object}
 * @param list.todo.id {String}
 * @param list.todo.text {String}
 * @param list.todo.completed {Boolean}
 */
const generateUuid = () => uuid()
const initialState = [{
  list: [{id: 12312, text: 'Some example text', completed: true}],
  todoTitle: 'Some list title',
  listId: generateUuid()
}]
const generateTodo = (text) => {
  return {
    text: text,
    completed: false,
    id: generateUuid()
  }
}
const generateTodoList = (title) => {
  return {
    list: [],
    listTitle: title,
    listId: generateUuid()
  }
}
/**
 * Reducer handling data flow between main store object and data
 * of multiple lists containing todos
 * @param {Object} state - current state of reducer part of store
 * @param {Object} action - action sent to reducer
 */
export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case todoConstants.ADD_TODO_LIST:
      return [
        generateTodoList(action.listTitle),
        ...state
      ]
    case todoConstants.DELETE_TODO_LIST:
      return [
        ...state.filter(todoList => todoList.listId !== action.listId)
      ]
    case todoConstants.CHANGE_TODO_LIST_TITLE:
      return [
        ...state.map(todoList => {
          if (todoList.listId === action.listId) {
            todoList.listTitle = action.listTitle
          }
          return todoList
        })
      ]
    //TodoActions
    case todoConstants.ADD_TODO:
      return [
        ...state.map(todoList => {
          if (todoList.listId === action.listId) {
            todoList.list = [
              generateTodo(action.text),
              ...todoList.list
            ]
          }
          return todoList
        })
      ]
    case todoConstants.DELETE_TODO:
      return [
        ...state.map(todoList => {
          if (todoList.listId === action.listId) {
            return {
              list: [...todoList.list.filter((todo) => todo.id !== action.id)],
              listTitle: todoList.listTitle,
              listId: todoList.listId
            }
          }
          return todoList
        })
      ]
    case todoConstants.TOGGLE_TODO:
      return [
        ...state.map((todoList) => {
          if (todoList.listId === action.listId) {
            return {
              ...todoList,
              list: todoList.list.map(todo => {
                if (todo.id === action.id) {
                  todo.completed = !todo.completed
                }
                return todo
              })
            }
          }
        })
      ]
    default:
      return state
  }
}
