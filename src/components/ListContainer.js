import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import SingleTodo from './SingleTodo'

const ListContainer = ({todoList = [], onToggle, onDelete}) => (
  <Table>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>DESCRIPTION</TableHeaderColumn>
        <TableHeaderColumn>DELETE</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {todoList
        .sort((todo, todo2) => todo.completed > todo2.completed)
        .map((todo) => {
          return (
            <SingleTodo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
          )
        })}
    </TableBody>

  </Table>
)

export default ListContainer