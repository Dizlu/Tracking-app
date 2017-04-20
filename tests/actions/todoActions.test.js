import { addTodo, deleteTodo, toggleTodo } from './../../src/actions/todoActions'
import todoConstants from './../../src/constants/todoConstants'

describe('todoActions', () => {
  it('addTodo', () => {
    const action = {
      type: todoConstants.ADD_TODO,
      listId: 123,
      text: 'message'
    }
    expect(addTodo(123,'message')).toEqual(action)
  })
  it('deleteTodo', () => {
    const action = {
      type: todoConstants.DELETE_TODO,
      listId: 123,
      id: 1
    }
    expect(deleteTodo(123, 1)).toEqual(action)
  })
  it('toggleTodo', () => {
    const action = {
      type: todoConstants.TOGGLE_TODO,
      listId: 123,
      id: 1
    }
    expect(toggleTodo(123, 1)).toEqual(action)
  })
})