import React from 'react'
import Navbar from './Navbar/Navbar'

class Main extends React.Component {
  render () {
    return (
        <div>
          <Navbar/>
          <a href="/">Main</a>
          <a href="/create">create</a>
          <a href="/item">item</a>
        </div>
    )
  }
}

export default Main

