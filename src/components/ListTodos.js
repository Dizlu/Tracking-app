import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import Delete from 'material-ui/svg-icons/action/delete'

const ListTodos = ({todoList = [], onToggle, onDelete}) =>
  (
    <Table
      selectable={false}>
      <TableHeader
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn>DESCRIPTION</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {todoList
          .map((todo) => {
            return (
              <TableRow selected={todo.completed} key={todo.id}>
                <TableRowColumn>
                  {todo.text}
                </TableRowColumn>
                <TableRowColumn>
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

export default ListTodos