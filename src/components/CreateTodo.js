import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField'

const CreateTodo = ({onAdd = () => {}}) =>
    (
        <Card containerStyle={{margin: '50px'}}>
            <CardTitle title="Add Todo!" subtitle="Make a note!" onClick={() => {onAdd({text: 'someText', id: 21, completed: true})}}/>
            <CardText>
                <TextField
                    hintText="Write Todo here"
                />
            </CardText>
        </Card>
    )

export default CreateTodo
