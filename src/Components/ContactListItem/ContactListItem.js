import React from 'react'
import './styles.css'

class ContactListItem extends React.Component {

  setContact = () => {
    this.props.handlerFromParent(this.props.contact.id)
  }

  render () {
    return (
      <div className="contact-list-item__body">
        <div className="contact-list-item__container" onClick={this.setContact}>
          <div className="contact-list-item__avatar">
            Avatar
          </div>
          <div className="contact-list-item__information">
            <div className="contact-list-item__information__name">
              {this.props.contact.name} {this.props.contact.surname} {this.props.contact.middlename}
            </div>
            <div className="contact-list-item__information__short-info">
              {this.props.contact.email}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactListItem

