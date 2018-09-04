import React from 'react'
import './styles.css'

class ContactListItem extends React.Component {
  render () {
    return (
      <div className="contact-list-item__body">
        <div className="contact-list-item__container">
          <div className="contact-list-item__avatar">
            Avatar
          </div>
          <div className="contact-list-item__information">
            <div className="contact-list-item__information__name">
              Some Name Here
            </div>
            <div className="contact-list-item__information__short-info">
              Email: abccba@mail.example
            </div>
            <div className="contact-list-item__information__short-info">
              Phone: 555-55-55
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactListItem

