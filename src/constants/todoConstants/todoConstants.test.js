import todoConstants from './todoConstants'

describe('todoConstants: ', () => {
  
  test('ADD_TODO is defined', () => {
    expect(todoConstants.ADD_TODO).toEqual('ADD_TODO')
  })
  
  test('DELETE_TODO is defined', () => {
    expect(todoConstants.DELETE_TODO).toEqual('DELETE_TODO')
  })
  
  test('TOGGLE_TODO is defined', () => {
    expect(todoConstants.TOGGLE_TODO).toEqual('TOGGLE_TODO')
  })
});