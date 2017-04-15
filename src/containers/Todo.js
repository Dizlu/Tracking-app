import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo} from './../actions/todoActions'
import CreateTodo from './CreateTodo'
import ListTodos from './../components/ListTodos'

export class Todo extends Component {
  render() {
    return (
      <div>
        <CreateTodo
          onSubmit={this.props.addTodo}/>
        <ListTodos
          todoList={this.props.todoReducer}
          onToggle={this.props.toggleTodo}
          onDelete={this.props.deleteTodo}
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
    addTodo: (formData) => {
      dispatch(addTodo(formData.todoText))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Todo)