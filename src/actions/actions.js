import * as Actions from './../constants/actionTypes';
/*
 * action creators
 */

export function addTodo(text) {
  return { type: Actions.ADD_TODO, text }
}