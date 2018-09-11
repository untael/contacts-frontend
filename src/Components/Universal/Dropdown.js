import React from 'react'
import './styles.css'
import axios from 'axios'

class Dropdown extends React.Component {
  constructor () {
    super()
    this.state = {
      displayMenu: false,
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
    this.editContact = this.editContact.bind(this)

  };

  showDropdownMenu () {
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu () {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

  deleteContact () {
    const contactId = this.props.contactId
    // console.log(contactId)
    axios.post('http://localhost:3000/delete', { contactId })
      .then(res => {
      })
    this.props.removeItemFromList()
  }

  editContact () {
    this.props.setItemStateForDisplay()
  }

  render () {
    return (
      <div className="dropdown__body">
        <div className="dropdown__container">
          <img src={require('../Popup/icons/settings.png')} onClick={() => this.showDropdownMenu()}></img>
          {
            this.state.displayMenu ? (
              <ul>
                <li onClick={() => this.editContact()}>
                  Edit
                </li>
                <li>
                  Send email
                </li>
                <li onClick={() => this.deleteContact()}>
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

