import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk';
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const rootEl = document.getElementById('root')
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl,
)
registerServiceWorker()
