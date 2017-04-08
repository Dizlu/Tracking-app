import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'

const ListTodos = ({todoList = []}) =>
  (
    <Table multiSelectable={true}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>DESCRIPTION</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={true}
      >
        {todoList.map((todo) => {
          return (
            <TableRow selected={todo.completed} key={todo.id}>
              <TableRowColumn>{todo.text}</TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )

export default ListTodos