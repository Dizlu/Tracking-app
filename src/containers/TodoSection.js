import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from './../actions/todoActions'
import TodoList from './../components/TodoList'
import CreateTodo from './CreateTodo'

export class TodoSection extends Component {
  render() {
    return (
      <div>
        <CreateTodo
          onSubmit={this.props.addTodo.bind(this, this.props.todoReducer[0].listId)}
        />
        <TodoList
          todoList={this.props.todoReducer[0].list}
          onDelete={this.props.deleteTodo.bind(this, this.props.todoReducer[0].listId)}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      addTodo: (listId, formData) => {
        dispatch(addTodo(listId, formData.todoText))
      },
    deleteTodo: (listId, id) => {
      dispatch(deleteTodo(listId, id))
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoSection)