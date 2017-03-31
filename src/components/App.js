import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { red100, red500, red700, purpleA400 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Content from './Content'

injectTapEventPlugin()
/**
 * Main component containing all of the main components
 * Has no connection with store - stateless component
 */
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    primary3Color: red100,
    accent1Color: purpleA400,
    pickerHeaderColor: red500
  }
})

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Content />
  </MuiThemeProvider>
)

export default App