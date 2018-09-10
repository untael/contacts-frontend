import React from 'react'
import './styles.css'

class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar-body">
        <div className="navbar-container">
          <div className="navbar-button">
            <a href="/">homepage</a>
          </div>
          <div className="navbar-button">
            <a href="/create">create contact</a>
          </div>
          <div className="navbar-button">
            <a href="/search">search contact</a>
          </div>
          <div className="navbar-button">
            <a href="/list">contacts list</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar

