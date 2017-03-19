import React, { PropTypes } from 'react'
import AppBarComposition from './../../containers/AppBarComposition/AppBarComposition'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
/**
 * Main component containing all of the main components
 * Has no connection with store - stateless component
 */
const App = () => (
  <div className="app">
    <AppBarComposition />
  </div>
)

const { object } = PropTypes

App.propTypes = {
  muiTheme: object
}

export default App