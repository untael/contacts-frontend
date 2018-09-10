import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ContactListItem from './Components/ContactListItem/ContactListItem'
import ContactCreateForm from './Components/ContactCreateForm/ContactCreateForm'
import ContactDisplayForm from './Components/ContactDisplayForm/ContactDisplayForm'
import Navbar from './Components/Navbar/Navbar'
import ContactList from './Components/ContactList/ContactList'
import './App.css'
import ContactSearchForm from './Components/ContactSearchForm/ContactSearchForm'

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
      <Route exact path="/list" component={ContactList}/>
      <Route path="/create" component={ContactCreateForm}/>
      <Route path="/item" component={ContactListItem}/>
      <Route path="/search" component={ContactSearchForm}/>
      <div className="right">
      </div>
    </div>
  </Router>
)

export default App
