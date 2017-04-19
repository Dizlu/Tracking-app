import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './../actions/todoActions'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export class TodoSection extends Component {
  render() {
    return (
      <div>
        <CreateTodo
          onSubmit={ (formData) => {
            this.props.addTodo(formData, this.props.todoReducer[0].listId)
          }} />
        <Todo
          todoList={this.props.todoReducer[0].list}
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
      addTodo: (formData, listId) => {
        dispatch(addTodo(formData.todoText, listId))
      }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoSection)