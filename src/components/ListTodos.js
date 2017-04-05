import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const ListTodos = ({todos = []}) =>
    (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Severity</TableHeaderColumn>
                    <TableHeaderColumn>Description</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.map((todo) => {
                    return (
                        <TableRow>
                            <TableRowColumn>{todo.id}</TableRowColumn>
                            <TableRowColumn>{todo.text}</TableRowColumn>
                            <TableRowColumn>{todo.completed}</TableRowColumn>
                        </TableRow>
                    )
                })}
                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    )

export default ListTodos