import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactListItem from './Components/ContactListItem/ContactListItem'
import ContactCreateForm from './Components/ContactCreateForm/ContactCreateForm'
import ContactExplorer
  from './Components/ContactExplorer/ContactExplorer'
import './App.css'
import ContactSearchForm from './Components/ContactSearchForm/ContactSearchForm'

const App = () => (
  <Router>
    <div className="App">
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
