import { addTodo, deleteTodo, toggleTodo } from './todoActions'
import todoConstants from './../../constants/todoConstants/todoConstants'

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