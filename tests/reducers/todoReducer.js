import todoReducer from '../../src/reducers/todoReducer'

describe('todoData reducer', () => {
  test('invalid method', () => {
    const action = {
      type: 'ADD_ELSE'
    }
    expect(todoReducer([], action)).toEqual([])
  })

  test('ADD_TODO', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'some text',
    }
    const todo = {
      text: 'some text',
      completed: false
    }
    const ret = todoReducer([{}], action)
    expect(ret[0].text).toEqual(action.text)
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
