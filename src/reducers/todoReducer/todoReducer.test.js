import todoReducer from './todoReducer'

describe('todoReducer reducer', () => {
  test('invalid method', () => {
    const action = {
      type: 'ADD_ELSE'
    }
    expect(todoReducer([], action)).toEqual([]);
  })

  test('ADD_TODO', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'some text',
      id: 'some id'
    }
    const todo = {
      text: 'some text',
      id: 'some id',
      completed: false
    }
    expect(todoReducer([{}], action)).toEqual([{}, todo])
  })

  test('DELETE_TODO', () => {
    const todos = [{
      id: 1,
      text: 'some text',
      completed: false
    }]
    const action = {
      type: 'DELETE_TODO',
      id: 1
    }
    expect(todoReducer(todos, action)).toEqual([])
  })

  test('TOGGLE_TODO', () => {
    const todos = [{
      id: 1,
      text: 'some text',
      completed: false
    }]
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    expect(todoReducer(todos, action)).toEqual([{
      id: 1,
      text: 'some text',
      completed: true
    }])
  })
})
