import reducer from './index'
import { ADD_TODO } from './../constants/actionTypes';

test('combineReducers properly', () => {
  expect(reducer).toBeInstanceOf(Function)
})