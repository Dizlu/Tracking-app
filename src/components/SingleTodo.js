import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import Delete from 'material-ui/svg-icons/action/delete'

const SingleTodo = ({todo = {}, onToggle, onDelete}) => (
  <TableRow onRowClick={() => onToggle(todo.id)} selected={todo.completed}>
    <TableRowColumn style={{'verticalAlign': 'middle'}}>{todo.text}</TableRowColumn>
    <TableRowColumn style={{width: '30%', 'textAlign': 'center', 'verticalAlign': 'middle'}}>
      <Delete onClick={() => onDelete(todo.id)}/>
    </TableRowColumn>
  </TableRow>
)

export default SingleTodo