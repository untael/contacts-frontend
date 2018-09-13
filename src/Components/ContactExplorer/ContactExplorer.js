import React from 'react'
import axios from 'axios'
import ContactListItem from '../ContactListItem/ContactListItem'
import './styles.css'
import ContactDisplayForm from '../ContactDisplayForm/ContactDisplayForm'
import ContactEditForm from '../ContactEditForm/ContactEditForm'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactCreateForm from '../ContactCreateForm/ContactCreateForm'

class ContactExplorer extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    requestSent: false,
    showSearch: false,
    showDisplay: false,
    showEdit: false,
    showList: true,
    contact: {},
    contacts: [],
    pageNumber: 1,
  }

  closeDisplay = () => {
    this.setState({
      showDisplay: false,
      showList: true,
    })
  }

  showSearch = () => {
    this.setState({
      showEdit: false,
      showList: false,
      showDisplay: false,
      showSearch: true,
      showCreate: false,
    })
  }

  closeSearch = () => {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
    })
  }

  showEdit = () => {
    this.setState({
      showList: false,
      showEdit: true,
    })
  }

  closeEdit = () => {
    this.setState({
      showEdit: false,
      showList: true,
    })
  }

  showCreate = () => {
    this.setState({
      showEdit: false,
      showList: false,
      showDisplay: false,
      showSearch: false,
      showCreate: true,
    })
  }

  closeCreate = () => {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
    })
  }

  closeAll = () => {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
    })
  }

  updateList = (deletedContactId) => {
    // console.log(deletedContactId)
    this.setState((state) => ({
        contacts: state.contacts.filter(
          (contact) => contact.id !== deletedContactId),
      }),
    )
    // console.log(this.state)
  }

  setItemStateForDisplay = (itemState) => {
    // console.log(itemState)
    this.setState({
      contact: itemState,
      showDisplay: true,
      showList: false,
    })
  }

  setItemStateForEdit = (itemState) => {
    // console.log(itemState)
    this.setState({
      contact: itemState,
      showEdit: true,
      showList: false,
    })
  }

  componentDidMount () {
    this.getContacts()
  }

  getContacts = () => {
    const pageNumber = this.state.pageNumber
    console.log(pageNumber)
    axios.post('http://localhost:3000/list', { pageNumber })
      .then(res => {
        const contacts = res.data
        // console.log(contacts)
        this.setState({
          contacts: this.state.contacts.concat(contacts),
          pageNumber: this.state.pageNumber + 1,
        })
      })
    console.log(this.state.contacts)
  }


  render () {
    return (
      <div className="contact-explorer__body">
        <hr/>
        <div className="contact-explorer__container">
          <div className="contact-explorer__button" onClick={this.showSearch}>
            Search contact
          </div>
          <div className="contact-explorer__button" onClick={this.showCreate}>
            Create contact
          </div>
          <div className="contact-explorer__button" onClick={this.closeAll}>
            Full contact list
          </div>
        </div>
        <hr/>

        {this.state.showList ? (
          <div className="contact-explorer__container">
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

        <div className="contact-explorer__container">
          <button className="contact-explorer__button" onClick={this.getContacts}>
            Load More
          </button>
        </div>

        {this.state.showDisplay ? (
          <div className="contact-explorer__container">
            <ContactDisplayForm
              closeDisplay={this.closeDisplay}
              contact={this.state.contact}
            />
          </div>) : (null)
        }
        {this.state.showEdit ? (
          <div className="contact-explorer__container">
            <ContactEditForm
              closeEdit={this.closeEdit}
              showEdit={this.showEdit}
              contact={this.state.contact}
            />
          </div>) : (null)
        }

        {this.state.showSearch ? (
          <div className="contact-explorer__container">
            <ContactSearchForm
              closeSearch={this.closeSearch}
            />
          </div>) : (null)
        }

        {this.state.showCreate ? (
          <div className="contact-explorer__container">
            <ContactCreateForm
              closeCreate={this.closeCreate}
            />
          </div>) : (null)
        }
      </div>
    )
  }
}

export default ContactExplorer
