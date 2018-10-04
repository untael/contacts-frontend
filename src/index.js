import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const rootEl = document.getElementById('root')
const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl,
)
registerServiceWorker()
