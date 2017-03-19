import React, { PropTypes } from 'react'
import AppBarComposition from './../../containers/AppBarComposition/AppBarComposition'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { red100, red500, red700, purpleA400 } from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
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
  <div className="app">
    <MuiThemeProvider muiTheme={muiTheme}>
      <AppBarComposition />
    </MuiThemeProvider>
  </div>
)

const { object } = PropTypes

App.propTypes = {
  muiTheme: object
}

export default App