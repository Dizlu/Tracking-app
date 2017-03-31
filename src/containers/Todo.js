import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo} from './../actions/todoActions'
import CreateTodo from './../components/CreateTodo'

export class Todo extends Component {
  render() {
    return (
      <div>
        <CreateTodo />
      </div>
    )
  }
}

const mapStateToProps = ({ todoData }) => {
  return {
    todoApp: {
      as: 'asdas'
    }, todoData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      console.log('add')
      dispatch(addTodo(text))
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