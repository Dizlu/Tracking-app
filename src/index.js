import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import App from './components/App'
import store from './store'
import './index.css'

const history = syncHistoryWithStore(createBrowserHistory(), store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)