import React, { Component } from 'react'
import TodoList from '../components/TodoList'

export class Todo extends Component {
  render() {
    return (
      <div>
        <TodoList
          todoList={this.props.todoList}
          onToggle={this.props.toggleTodo}
          onDelete={this.props.deleteTodo}
        />
      </div>
    )
  }
}

export default Todo