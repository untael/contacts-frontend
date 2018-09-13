import React from 'react'
import './styles.css'
import axios from 'axios'

class Dropdown extends React.Component {
  constructor () {
    super()
    this.state = {
      displayMenu: false,
    }
  };

  showDropdownMenu = () => {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  deleteContact = () => {
    const contactId = this.props.contactId
    console.log(contactId)
    // console.log(contactId)
    axios.post('http://localhost:3000/delete', { contactId })
      .then(res => {
      })
    this.props.removeItemFromList(contactId)
  }

  editContact = () => {
    this.props.editContact()
  }

  render () {
    return (
      <div className="dropdown__body">
        <div className="dropdown__container">
          <img src={require('../Popup/icons/settings.png')} onClick={() => this.showDropdownMenu()}></img>
          {
            this.state.displayMenu ? (
              <ul className="dropdown__ul">
                <li className="dropdown__li" onClick={() => this.editContact()}>
                  Edit
                </li>
                <li className="dropdown__li">
                  Send email
                </li>
                <li className="dropdown__li" onClick={() => this.deleteContact()}>
                  Delete
                </li>
              </ul>) : (null)
          }
        </div>
      </div>
    )
  }
}

export default Dropdown

