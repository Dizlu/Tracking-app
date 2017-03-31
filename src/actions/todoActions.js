import todoConstants from './../constants/todoConstants'
/*
 * action creators
 */

/**
 * Adds another todo into active list
 * @param {String} text - message for todo
 */
export function addTodo(text) {
  return { type: todoConstants.ADD_TODO, text }
}

/**
 * Deletes todo from active list
 * @param {Uuid} id - todo to delete
 */
export function deleteTodo(id) {
  return { type: todoConstants.DELETE_TODO, id }
}

/**
 * Toggles completed key into opposite Boolean value
 * @param {Uuid} id - todo for completed value toggle
 */
export function toggleTodo(id) {
  return { type: todoConstants.TOGGLE_TODO, id }
}