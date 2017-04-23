import React, { Component } from 'react'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

class CreateTodo extends Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <Card style={{margin: '2em', padding: '1em', display: 'flex', 'justifyContent': 'space-around'}}>
        <CardText>
          <form onSubmit={handleSubmit}>
            <div>
              <Field label="Enter Todo" name="todoText" component={TextField}/>
            </div>
            <div>
              <RaisedButton primary={true} fullWidth={true} label="Create Todo" onClick={handleSubmit}/>
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
