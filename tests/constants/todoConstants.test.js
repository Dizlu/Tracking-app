import todoConstants from './../../src/constants/todoConstants'

describe('todoConstants: ', () => {
  test('ADD_TODO is properly defined', () => {
    expect(todoConstants.ADD_TODO).toEqual('ADD_TODO')
  })
  test('DELETE_TODO is properly defined', () => {
    expect(todoConstants.DELETE_TODO).toEqual('DELETE_TODO')
  })
  test('TOGGLE_TODO is properly defined', () => {
    expect(todoConstants.TOGGLE_TODO).toEqual('TOGGLE_TODO')
  })
  test('ADD_TODO_LIST is properly defined', () => {
    expect(todoConstants.ADD_TODO_LIST).toEqual('ADD_TODO_LIST')
  })
  test('DELETE_TODO_LIST is properly defined', () => {
    expect(todoConstants.DELETE_TODO_LIST).toEqual('DELETE_TODO_LIST')
  })
  test('CHANGE_TODO_LIST_TITLE is properly defined', () => {
    expect(todoConstants.CHANGE_TODO_LIST_TITLE).toEqual('CHANGE_TODO_LIST_TITLE')
  })
})