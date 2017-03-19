import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import todoApp from './reducers/index'
import App from './components/App/App'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { red500, red700, purpleA400 } from 'material-ui/styles/colors'

const store = createStore(todoApp)
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    accent1Color: purpleA400,
    pickerHeaderColor: red500
  }
})

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App 
        muiTheme={muiTheme}
      />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)