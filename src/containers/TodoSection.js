import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from './../actions/todoActions'
import ListContainer from '../components/ListContainer'
import CreateTodo from './CreateTodo'

export class TodoSection extends Component {
  render() {
    return (
      <div>
        <CreateTodo
          onSubmit={this.props.addTodo.bind(this, this.props.todoReducer[0].listId)}
        />
        <ListContainer
          todoList={this.props.todoReducer[0].list}
          onToggle={this.props.toggleTodo.bind(this, this.props.todoReducer[0].listId)}
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
    toggleTodo: (listId, id) => {
        dispatch(toggleTodo(listId, id))
    },
    deleteTodo: (listId, id) => {
      dispatch(deleteTodo(listId, id))
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(TodoSection)