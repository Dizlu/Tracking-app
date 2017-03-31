import reducer from './../../src/reducers/mainReducer'
import { ADD_TODO } from './../../src/actions/todoActions'

test('combineReducers properly', () => {
  expect(reducer).toBeInstanceOf(Function)
})