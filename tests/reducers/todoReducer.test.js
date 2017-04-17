import todoReducer from '../../src/reducers/todoReducer'

describe('todoData reducer', () => {
  test('invalid method', () => {
    const action = {
      type: 'ADD_ELSE'
    }
    expect(todoReducer([], action)).toEqual([])
  })
  describe('todoList actions', () => {
    test('ADD_TODO_LIST', () => {
      const action = {
        type: 'ADD_TODO_LIST',
        title: 'title_list'
      }
      const ret = todoReducer([], action)
      expect(ret[0].listTitle).toEqual('title_list')
      expect(ret[0].list).toEqual([])
    })
    test('DELETE_TODO_LIST', () => {
      const action = {
        type: 'DELETE_TODO_LIST',
        id: 123
      }
      const initialState = [{
        list: [{id: 123234, text: 'some text broah', completed: true}],
        listTitle: 'Some list title',
        listId: 123
      }]
      const ret = todoReducer(initialState, action)
      expect(ret[0]).toEqual(undefined)
    })
    test('CHANGE_TITLE_LIST', () => {
      const action = {
        type: 'CHANGE_TODO_LIST_TITLE',
        title: 'new_title',
        id: 123
      }
      const initialState = [{
        list: [{id: 123234, text: 'some text broah', completed: true}],
        listTitle: 'Some list title',
        listId: 123
      }]
      const ret = todoReducer(initialState, action)
      expect(ret[0].listTitle).toEqual('new_title')
      expect(ret[0].listId).toEqual(123)
    })
  })

  describe('todoActions', () => {
    test('ADD_TODO', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'some text',
        listId: 123
      }
      const initialState = [{
        list: [],
        listTitle: 'Some list title',
        listId: 123
      }]
      const ret = todoReducer(initialState, action)
      expect(ret[0].list[0].text).toEqual(action.text)
    })
    test('DELETE_TODO', () => {
      const action = {
        type: 'DELETE_TODO',
        id: 1,
        listId: 123
      }
      const initialState = [{
        list: [{id: 1, text: 'some text broah', completed: true}],
        listTitle: 'title',
        listId: 123
      }]
      expect(todoReducer(initialState, action)).toEqual([{ list: [], listTitle: 'title', listId: '123'}])
    })
    test('TOGGLE_TODO', () => {
      const initialState = [{
        list: [{id: 1, text: 'some text broah', completed: false}],
        listTitle: 'title',
        listId: 123
      }]
      const action = {
        type: 'TOGGLE_TODO',
        id: 1,
        listId: 123
      }
      const ret = todoReducer(initialState, action)
      expect(ret[0].list[0].completed).toEqual(true)
    })
  })
})
