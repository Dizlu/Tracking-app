import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import Delete from 'material-ui/svg-icons/action/delete'

const TodoList = ({todoList = [], onToggle, onDelete}) =>
  (
    <Table
      selectable={false}>
      <TableHeader
        displaySelectAll={false} >
        <TableRow>
          <TableHeaderColumn>DESCRIPTION</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {todoList
          .map((todo) => {
            return (
              <TableRow selected={todo.completed} key={todo.id}>
                <TableRowColumn
                  style={{
                    'verticalAlign': 'middle'
                  }}>
                  {todo.text}
                </TableRowColumn>
                <TableRowColumn
                  style={{
                    width: '30%',
                    'text-align': 'center',
                    'verticalAlign': 'middle'
                  }}>
                  <Delete onClick={(e) => {
                    e.stopPropagation()
                    e.nativeEvent.stopImmediatePropagation()
                    onDelete(todo.id)
                  }}/>
                </TableRowColumn>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )

export default TodoList