import React from 'react'
import axios from 'axios'
import ContactListItem from '../ContactListItem/ContactListItem'
import './styles.css'

class ContactList extends React.Component {
  state = {
    contacts: [],
  }
  // const listItems = this.state.contacts.map((contact) =>
  // <li>{contact}</li>
  // )

  componentDidMount () {
    axios.get('http://localhost:3000/list')
      .then(res => {
        const contacts = res.data
        console.log(contacts)
        this.setState({ contacts })
      })
  }

  render () {
    return (
      <div className="contact-list__body">
        <div className="contact-list__container">
          {this.state.contacts.map(contact =>
            <ContactListItem
              key={contact.id}
              contact={contact}
            />,
          )}
        </div>
      </div>
    )
  }
}

export default ContactList
