import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import todoApp from './reducers/index'
import App from './components/App/App'


const store = createStore(todoApp)


render(
  <Provider store={store}>
      <App 
      />
  </Provider>,
  document.getElementById('root')
)