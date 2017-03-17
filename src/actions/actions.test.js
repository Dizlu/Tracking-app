import { addTodo } from './actions'

it('action creator gives proper action', () => {
  expect(addTodo('haha')).toEqual({
    type: 'ADD_TODO',
    text: 'haha'
  })
})