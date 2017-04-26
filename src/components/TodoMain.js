import React from 'react'
import AppBarComposition from './../containers/AppBarComposition'
import TodoSection from './../containers/TodoSection'

const TodoMain = () =>
  (
    <div>
      <AppBarComposition />
      <TodoSection />
    </div>
  )

export default TodoMain