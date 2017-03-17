import todos from './actions'
import { ADD_TODO } from './../constants/actionTypes';

test('invalid method todos reducer', () => {
  expect(todos([], {
    type: 'ADD_ELSE'
  })).toEqual([]);
})

test('todos reducer ADD_TODO', () => {
  expect(todos([{}, {}], {
    text: 'some text'
  })).toEqual([{}, {}, {
    text: 'some text',
    completed: false
  }])
})