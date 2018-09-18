import React from 'react'
import './styles.css'
import Dropdown from '../Universal/Dropdown'

class ContactListItem extends React.Component {
  constructor () {
    super()
  }

  removeItemFromList = (contactId) => {
    const itemId = contactId
    this.props.updateList(itemId)
  }

  showDisplay = () => {
    this.props.showDisplay(this.props.contact)
  }

  editContact = () => {
    this.props.showEdit(this.props.contact)
  }

  render () {
    return (
      <div className="contact-list-item__body">
        <div className="contact-list-item__container">
          <div className="contact-list-item__avatar" onClick={this.showDisplay}>
            Avatar
          </div>
          <div className="contact-list-item__information" onClick={this.showDisplay}>
            <div className="contact-list-item__information__name">
              {this.props.contact.name} {this.props.contact.surname} {this.props.contact.middlename}
            </div>
            <div className="contact-list-item__information__short-info">
              {this.props.contact.email}
            </div>
          </div>
          <div className="contact-list-item__dropdown">
            <Dropdown
              setItemStateForDisplay={this.showDisplay}
              editContact={this.editContact}
              removeItemFromList={this.removeItemFromList}
              contactId={this.props.contact.id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactListItem

