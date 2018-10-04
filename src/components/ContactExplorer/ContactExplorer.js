import React from 'react'
import axios from 'axios'
import './styles.css'
import ContactListItem from '../ContactListItem/ContactListItem'
import ContactDisplayForm from '../ContactDisplayForm/ContactDisplayForm'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactCreateForm from '../ContactCreateForm/ContactCreateForm'

class ContactExplorer extends React.Component {
  // state = {
  //   requestSent: false,
  //   showSearch: false,
  //   showDisplay: false,
  //   showEdit: false,
  //   showList: true,
  //   showLoader: true,
  //   contact: {},
  //   contacts: [],
  //   pageNumber: 1,
  // }

  showDisplay = (itemState) => {
    // console.log(itemState)
    this.setState({
      contact: itemState,
      showDisplay: true,
      showList: false,
      showLoader: false,
    })
  }

  closeDisplay = () => {
    this.setState({
      showDisplay: false,
      showList: true,
      showLoader: true,

    })
  }

  showSearch = () => {
    this.setState({
      showEdit: false,
      showList: false,
      showDisplay: false,
      showSearch: true,
      showCreate: false,
      showLoader: false,
    })
  }

  closeSearch = () => {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
      showLoader: true,
    })
  }

  showEdit = (contact) => {
    this.setState({
      contact: contact,
      showList: false,
      showEdit: true,
      showLoader: false,
    })
  }


  showCreate = () => {
    this.setState({
      showEdit: false,
      showList: false,
      showDisplay: false,
      showSearch: false,
      showCreate: true,
      showLoader: false,
    })
  }

  closeCreate = () => {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
      showLoader: true,
    })
  }

  closeAll = () => {
    this.setState({
      showEdit: false,
      showList: true,
      showDisplay: false,
      showSearch: false,
      showCreate: false,
      showLoader: true,
    })
  }

  updateList = (сontactId) => {
    this.getContacts()
    this.setState((state) => ({
        contacts: state.contacts.filter(
          (contact) => contact.id !== сontactId),
      }),
    )
  }

  componentDidMount () {
    this.getContacts()
    console.log('this.props', this.props.showList)
  }

  getContacts = () => {
    const pageNumber = this.props.pageNumber
    axios.post('http://localhost:3000/list', { pageNumber })
      .then(res => {
        const contacts = res.data
        this.setState({
          contacts: this.props.contacts.concat(contacts),
          pageNumber: this.props.pageNumber + 1,
        })
      })
  }


  render () {
    return (
      <div className="contact-explorer__body">
        <hr/>
        <div className="contact-explorer__container__navbar">
          <div className="contact-explorer__button" onClick={this.showSearch}>
            search
          </div>
          <div className="contact-explorer__button" onClick={this.showCreate}>
            create
          </div>
          <div className="contact-explorer__button" onClick={this.closeAll}>
            list
          </div>
        </div>
        <hr/>

        {this.props.showList ? (
          <div className="contact-explorer__container">
            {this.state.contacts.map(contact =>
              <ContactListItem
                showEdit={this.showEdit}
                showDisplay={this.showDisplay}
                updateList={this.updateList}
                key={contact.id}
                contact={contact}
              />,
            )}
          </div>
        ) : (null)}
        {this.props.showLoader ? (
          <div className="contact-explorer__container">
            <button className="contact-explorer__button" onClick={this.getContacts}>
              ...
            </button>
          </div>) : (null)}

        {this.props.showDisplay ? (
          <div className="contact-explorer__container">
            <ContactDisplayForm
              closeDisplay={this.closeDisplay}
              contact={this.state.contact}
            />
          </div>) : (null)
        }

        {this.props.showSearch ? (
          <div className="contact-explorer__container">
            <ContactSearchForm
              closeSearch={this.closeSearch}
            />
          </div>) : (null)
        }

        {this.props.showCreate ? (
          <div className="contact-explorer__container">
            <ContactCreateForm
              closeCreate={this.closeCreate}
              updateList={this.updateList}
            />
          </div>) : (null)
        }

        {this.props.showEdit ? (
          <div className="contact-explorer__container">
            <ContactCreateForm
              closeCreate={this.closeCreate}
              showEdit={this.showEdit}
              contact={this.state.contact}
              updateList={this.updateList}
            />
          </div>) : (null)
        }
      </div>
    )
  }
}

export default ContactExplorer
