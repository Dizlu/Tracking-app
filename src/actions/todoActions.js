import todoConstants from './../constants/todoConstants'
/*
 * action creators
 */

/**
 * Adds another todo into active list
 * @param {Number} listId - id of list to append todo
 * @param {String} text - message for todo
 */
export function addTodo (listId, text) {
  return {type: todoConstants.ADD_TODO, listId, text}
}

/**
 * Deletes todo from active list
 * @param {Number} listId - id of list in which delete todo
 * @param {Number} id - todo to delete
 */
export function deleteTodo (listId, id) {
  return {type: todoConstants.DELETE_TODO, listId, id}
}

/**
 * Toggles completed key into opposite Boolean value
 * @param {Number} listId - id of list in which toggle todo
 * @param {Number} id - todo for completed value toggle
 */
export function toggleTodo (listId, id) {
  return {type: todoConstants.TOGGLE_TODO, listId, id}
}