import React from 'react'
import './styles.css'
import Dropdown from '../Universal/Dropdown'

class ContactListItem extends React.Component {
  constructor () {
    super()
    this.removeItemFromList = this.removeItemFromList.bind(this)
    this.setItemStateForDisplay = this.setItemStateForDisplay.bind(this)
    this.setItemStateForEdit = this.setItemStateForEdit.bind(this)
  }

  removeItemFromList () {
    console.log('removed')
    this.props.updateList(this.props.contact.id)
  }

  setItemStateForDisplay() {
    this.props.setItemStateForDisplay(this.props.contact)
  }

  setItemStateForEdit() {
    this.props.setItemStateForEdit(this.props.contact)
  }

  render () {
    return (
      <div className="contact-list-item__body">
        <div className="contact-list-item__container">
          <div className="contact-list-item__avatar" onClick={this.setItemStateForDisplay}>
            Avatar
          </div>
          <div className="contact-list-item__information" onClick={this.setItemStateForDisplay}>
            <div className="contact-list-item__information__name">
              {this.props.contact.name} {this.props.contact.surname} {this.props.contact.middlename}
            </div>
            <div className="contact-list-item__information__short-info">
              {this.props.contact.email}
            </div>
          </div>
          <div className="contact-list-item__dropdown">
            <Dropdown
              setItemStateForDisplay={this.setItemStateForDisplay}
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

