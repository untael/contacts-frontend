import React from 'react'
import axios from 'axios'
import ContactListItem from '../ContactListItem/ContactListItem'
import './styles.css'
import ContactDisplayForm from '../ContactDisplayForm/ContactDisplayForm'
import ContactEditForm from '../ContactEditForm/ContactEditForm'

class ContactListExplorer extends React.Component {
  constructor (props) {
    super(props)
    this.updateList = this.updateList.bind(this)
    this.setItemStateForDisplay = this.setItemStateForDisplay.bind(this)
    this.hideDisplay = this.hideDisplay.bind(this)
    this.showEdit = this.showEdit.bind(this)
  }

  state = {
    showDisplay: false,
    showEdit: false,
    showList: true,
    contact: {},
    contacts: [],
  }

  hideDisplay () {
    this.setState({
      showDisplay: false,
      showList: true,
    })
  }

  showEdit () {
    this.setState({
      showList: false,
      showEdit: true,
    })
  }

  updateList (deletedContactId) {
    this.setState((state) => ({
        contacts: state.contacts.filter(
          (contact) => contact.id !== deletedContactId),
      }),
    )
  }

  setItemStateForDisplay (itemState) {
    console.log(itemState)
    this.setState({
      contact: itemState,
      showDisplay: true,
      showList: false,
    })
  }

  setItemStateForDisplay (itemState) {
    console.log(itemState)
    this.setState({
      contact: itemState,
      showEdit: true,
      showList: false,
    })
  }

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
        {this.state.showList ? (
          <div className="contact-list__container">
            {this.state.contacts.map(contact =>
              <ContactListItem
                setItemStateForEdit={this.setItemStateForEdit}
                setItemStateForDisplay={this.setItemStateForDisplay}
                updateList={this.updateList}
                key={contact.id}
                contact={contact}
              />,
            )}
          </div>
        ) : (null)}

        {this.state.showDisplay ? (
          <div className="contact-list__container">
            <ContactDisplayForm
              hideDisplay={this.hideDisplay}
              contact={this.state.contact}
            />
          </div>) : (null)
        }
        {this.state.showEdit ? (
          <div className="contact-list__container">
            <ContactEditForm
              showEdit={this.showEdit}
              contact={this.state.contact}
            />
          </div>) : (null)
        }
      </div>
    )
  }
}

export default ContactListExplorer
