import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

let text = ''
const CreateTodo = ({addTodo}) =>
    (
        <Card containerStyle={{margin: '50px', textAlign: 'center'}}>
            <CardTitle title="Add Todo!" subtitle="Make a note!"/>
            <CardText>
                <TextField
                    hintText="Write Todo here"
                    fullWidth={true}
                    ref={text}
                />
                <FlatButton label="Add todo"
                    onClick={event => addTodo(text)}
                />
            </CardText>
        </Card>
    )

export default CreateTodo
