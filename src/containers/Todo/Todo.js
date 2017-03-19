import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo} from './../../actions/todoActions/todoActions'

export class Todo extends Component {

  render() {
    return (
      <div 
      onClick={this.props.addTodo}
        >
        My first TodooO!
      </div>
    )
  }
}

const mapStateToProps = ({ todo }) => {
  return {
    todoApp: {
      as: 'asdas'
    }, todo
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