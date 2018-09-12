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
    this.updateList = this.updateList.bind(this)
    this.setItemStateForDisplay = this.setItemStateForDisplay.bind(this)
    this.setItemStateForEdit = this.setItemStateForEdit.bind(this)
    this.closeDisplay = this.closeDisplay.bind(this)
    this.showEdit = this.showEdit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
    this.showCreate = this.showCreate.bind(this)
    this.closeCreate = this.closeCreate.bind(this)
    this.showSearch = this.showSearch.bind(this)
    this.closeSearch = this.closeSearch.bind(this)
    this.closeAll = this.closeAll.bind(this)
  }

  state = {
    showSearch: false,
    showDisplay: false,
    showEdit: false,
    showList: true,
    contact: {},
    contacts: [],
  }

  closeDisplay () {
    this.setState({
      showDisplay: false,
      showList: true,
    })
  }

  showSearch () {
    this.setState({
      showEdit: false,
      showList: false,
      showDisplay: false,
      showSearch: true,
      showCreate: false,
    })
  }

  closeSearch () {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
    })
  }

  showEdit () {
    this.setState({
      showList: false,
      showEdit: true,
    })
  }

  closeEdit () {
    this.setState({
      showEdit: false,
      showList: true,
    })
  }

  showCreate () {
    this.setState({
      showEdit: false,
      showList: false,
      showDisplay: false,
      showSearch: false,
      showCreate: true,
    })
  }

  closeCreate () {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
    })
  }

  closeAll () {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
    })
  }

  updateList (deletedContactId) {
    // console.log(deletedContactId)
    this.setState((state) => ({
        contacts: state.contacts.filter(
          (contact) => contact.id !== deletedContactId),
      }),
    )
    // console.log(this.state)
  }

  setItemStateForDisplay (itemState) {
    // console.log(itemState)
    this.setState({
      contact: itemState,
      showDisplay: true,
      showList: false,
    })
  }

  setItemStateForEdit (itemState) {
    // console.log(itemState)
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
        // console.log(contacts)
        this.setState({ contacts })
      })
  }

  render () {
    return (
      <div className="contact-list__body">
        <div className="contact-list__container">
          <div className="contact-list__button" onClick={this.showSearch}>
            Search contact
          </div>
          <div className="contact-list__button" onClick={this.showCreate}>
            Create contact
          </div>
          <div className="contact-list__button" onClick={this.closeAll}>
            Full contact list
          </div>
        </div>
        <hr/>

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
              closeDisplay={this.closeDisplay}
              contact={this.state.contact}
            />
          </div>) : (null)
        }
        {this.state.showEdit ? (
          <div className="contact-list__container">
            <ContactEditForm
              closeEdit={this.closeEdit}
              showEdit={this.showEdit}
              contact={this.state.contact}
            />
          </div>) : (null)
        }

        {this.state.showSearch ? (
          <div className="contact-list__container">
            <ContactSearchForm
              closeSearch={this.closeSearch}
            />
          </div>) : (null)
        }

        {this.state.showCreate ? (
          <div className="contact-list__container">
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
