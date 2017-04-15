import React, { Component } from 'react'
import { Card, CardText, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

class CreateTodo extends Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <Card style={{margin: '2em', padding: '1em', display: 'flex', 'justify-content': 'space-around'}}>
        <CardHeader title={'title will be listed in here'}/>
        <CardText>
          <form onSubmit={handleSubmit}>
            <div>
              <Field style={{'justify-content': 'space-around'}} label="Enter Todo" name="todoText" component={TextField}/>
            </div>
            <div>
              <RaisedButton label="Create Todo" onClick={handleSubmit}/>
            </div>
          </form>
        </CardText>
      </Card>
    )
  }
}

CreateTodo.PropTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({
  form: 'newTodo'
})(CreateTodo)
