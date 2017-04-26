import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { indigo100, indigo500, indigo700, blueA200 } from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'
import TodoMain from './components/TodoMain'
import store from './store'
import './index.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: indigo100,
    accent1Color: blueA200,
    pickerHeaderColor: indigo500
  }
})
injectTapEventPlugin()
const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history} >
        <Route path="/" component={TodoMain} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
