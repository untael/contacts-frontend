import React from 'react'
import './styles.css'
import Dropdown from '../Universal/Dropdown'
import UI from '../Popup/index'
import Toast from '../Popup/toast'
import '../Popup/popup.css'

class ContactListItem extends React.Component {
  showDisplay = () => {
    this.props.showDisplayPanel(this.props.contact)
  }
  deleteContact = () => {
    this.props.deleteContact(this.props.contact._id)
  }
  editContact = () => {
    this.props.showEditPanel(this.props.contact)
  }
  sendEmail = () => {
    if (this.props.contact.email) {
      window.open('mailto:' + this.props.contact.email)
    } else {
      UI.Toast.create(Toast.type.WARNING, 'This user have no email')
    }
  }

  render () {
    return (
      <div className="contact-list-item__body">
        <div className="contact-list-item__container">
          <div className="contact-list-item__avatar" onClick={this.showDisplay}>
            {this.props.contact.image}
          </div>
          <div className="contact-list-item__information" onClick={this.showDisplay}>
            <div className="contact-list-item__information__name">
              {this.props.contact.name} {this.props.contact.surname} {this.props.contact.middlename}
            </div>
            <div className="contact-list-item__information__short-info">
              <div className="contact-list-item__information__short-info__item">
                <label>Birthday:</label>
                {this.props.contact.birthday}
              </div>
              <div className="contact-list-item__information__short-info__item">
                <label>Address:</label>
                {this.props.contact.address}
              </div>
              <div className="contact-list-item__information__short-info__item">
                <label>Job:</label>
                {this.props.contact.job}
              </div>
            </div>
          </div>
          <div className="contact-list-item__dropdown">
            <Dropdown
              sendEmail={this.sendEmail}
              editContact={this.editContact}
              deleteContact={this.deleteContact}
              contactId={this.props.contact.id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactListItem

