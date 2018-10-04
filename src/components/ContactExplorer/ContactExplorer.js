import React from 'react'
import './styles.css'
import ContactListItem from '../../containers/ContactListItem'
import ContactDisplayForm from '../../containers/ContactDisplayForm'
import ContactSearchForm from '../../containers/ContactSearchForm'
import ContactCreateForm from '../../containers/ContactCreateForm'

class ContactExplorer extends React.Component {
  showSearch = () => {
    this.props.showSearchPanel()
  }

  showList = () => {
    this.props.showListPanel()
  }

  showCreate = () => {
    this.props.showEditPanel()
  }

  showDisplay = () => {
    this.props.showDisplayPanel()
  }

  updateList = () => {
    this.props.getContacts()
  }

  componentDidMount () {
    this.props.getContacts()
    this.props.showListPanel()
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
          <div className="contact-explorer__button" onClick={this.showList}>
            list
          </div>
        </div>
        <hr/>

        {this.props.showList ? (
          <div className="contact-explorer__container">
            {this.props.contacts.map(contact =>
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

        {/*{this.props.showLoader ? (*/}
          {/*<div className="contact-explorer__container">*/}
            {/*<button className="contact-explorer__button" onClick={this.getContacts}>*/}
              {/*...*/}
            {/*</button>*/}
          {/*</div>) : (null)}*/}

        {this.props.showDisplay ? (
          <div className="contact-explorer__container">
            <ContactDisplayForm/>
          </div>) : (null)
        }

        {this.props.showSearch ? (
          <div className="contact-explorer__container">
            <ContactSearchForm
              closeSearch={this.closeSearch}
            />
          </div>) : (null)
        }

        {this.props.showEdit ? (
          <div className="contact-explorer__container">
            <ContactCreateForm/>
          </div>) : (null)
        }
      </div>
    )
  }
}

export default ContactExplorer
