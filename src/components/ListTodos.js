import React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Delete from 'material-ui/svg-icons/action/delete'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  }
}

const ListTodos = ({todoList = [], onToggle, onDelete}) =>
  (
    <Table
      onCellClick={(cellNumber, cellColumn) => {
        console.log(cellColumn)
        if (!cellColumn) {
          onToggle(todoList[cellNumber].id)
        }
      }}
      multiSelectable={true}>
      <TableHeader
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn>DESCRIPTION</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        showRowHover={true}
        deselectOnClickaway={false}
      >
        {todoList
          .map((todo) => {
            return (
              <TableRow
                selected={todo.completed}
                key={todo.id}>
                <TableRowColumn>
                  {todo.text}
                </TableRowColumn>
                <TableRowColumn>
                  <Delete onClick={() => {
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