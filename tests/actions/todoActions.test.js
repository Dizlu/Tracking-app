import { addTodo, deleteTodo, toggleTodo } from './../../src/actions/todoActions'
import todoConstants from './../../src/constants/todoConstants'

describe('todoActions', () => {
  it('addTodo', () => {
    const action = {
      type: todoConstants.ADD_TODO,
      text: 'message'
    }
    expect(addTodo('message')).toEqual(action)
  })
  it('deleteTodo', () => {
    const action = {
      type: todoConstants.DELETE_TODO,
      id: 1
    }
    expect(deleteTodo(1)).toEqual(action)
  })
})