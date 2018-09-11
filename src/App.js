import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactListItem from './Components/ContactListItem/ContactListItem'
import ContactCreateForm from './Components/ContactCreateForm/ContactCreateForm'
import ContactDisplayForm from './Components/ContactDisplayForm/ContactDisplayForm'
import Navbar from './Components/Navbar/Navbar'
import ContactListExplorer from './Components/ContactListExplorer/ContactListExplorer'
import './App.css'
import ContactSearchForm from './Components/ContactSearchForm/ContactSearchForm'
import Dropdown from './Components/Universal/Dropdown'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const App = () => (
  <Router>
    <div className="App">
      <Navbar/>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/list" component={ContactListExplorer}/>
      <Route path="/create" component={ContactCreateForm}/>
      <Route path="/item" component={ContactListItem}/>
      <Route path="/search" component={ContactSearchForm}/>
      <div className="right">
      </div>
    </div>
  </Router>
)

export default App
