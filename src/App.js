import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactListItem from './Components/ContactListItem/ContactListItem'
import ContactCreateForm from './Components/ContactCreateForm/ContactCreateForm'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => (
  <Router>
    <div className="App">
      <Navbar/>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/create" component={ContactCreateForm} />
      <Route path="/item" component={ContactListItem} />
    </div>
  </Router>
);

export default App;
