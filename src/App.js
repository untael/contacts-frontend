import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactListItem from './components/ContactListItem/ContactListItem'
import ContactCreateForm from './components/ContactCreateForm/ContactCreateForm'
import ContactExplorer
  from './containers/ContactExplorer'
import './styles.css'
import ContactSearchForm from './components/ContactSearchForm/ContactSearchForm'

const App = () => (
  <Router>
    <div className="app">
      <Route exact path="/" component={ContactExplorer}/>
      <Route path="/create" component={ContactCreateForm}/>
      <Route path="/item" component={ContactListItem}/>
      <Route path="/search" component={ContactSearchForm}/>
      <div className="right">
      </div>
    </div>
  </Router>
)

export default App
