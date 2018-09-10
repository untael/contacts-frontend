import React from 'react'
import axios from 'axios'
import './styles.css'
import ContactListItem from '../ContactListItem/ContactListItem'
import DatePicker from 'react-datepicker/es'
import moment from 'moment'

class ContactSearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactName: undefined,
      contactSurname: undefined,
      contactMiddlename: undefined,
      contactBirthday: undefined,
      contactGender: undefined,
      contactFamily: undefined,
      contactCountry: undefined,
      contactCity: undefined,
      contactZip: undefined,
      contacts: [],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    if (value !== '') {
      this.setState({
        [name]: value,
      })
    } else {
      this.setState({
        [name]: undefined,
      })
    }
  }

  handleSearch () {
    const contact = {
      name: this.state.contactName,
      surname: this.state.contactSurname,
      middlename: this.state.contactMiddlename,
      birthday: this.state.contactBirthday,
      gender: this.state.contactGender,
      family: this.state.contactFamily,
      country: this.state.contactCountry,
      city: this.state.contactCity,
      zip: this.state.contactZip,
    }
    console.log(contact)
    axios.post('http://localhost:3000/search', { contact })
      .then(res => {
        const contacts = res.data
        console.log(contacts)
        this.setState({ contacts })
      })
  }

  render () {
    return (
      <div className="contact-search-form__body">
        <div className="contact-search-form__container">
          <div className="contact-create-form__container">
            <div className="contact-create-form__avatar-area">
              <div className="contact-create-form__container__title">
                Personal information:
              </div>
            </div>
            <div className="contact-create-form__container__input-block">
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="name" className="contact-create-form__label">Full name:</label>
                <input required name="contactName" id="name" type="text" placeholder="Name" className="contact-create-form__input" value={this.state.contactName} onChange={this.handleInputChange}/>
              </div>
              <div className="contact-create-form__container__input-block__item">
                <input required name="contactSurname" type="text" placeholder="Surname" className="contact-create-form__input" value={this.state.contactSurname} onChange={this.handleInputChange}/>
              </div>
              <div className="contact-create-form__container__input-block__item">
                <input name="contactMiddlename" type="text" placeholder="Middlename" className="contact-create-form__input" value={this.state.contactMiddlename} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="contact-create-form__container__input-block">
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="birthday" className="contact-create-form__label">Birthday:</label>
                <DatePicker
                  name="contactBirthday"
                  dateFormat="DD.MM.YYYY"
                  selected={this.state.contactBirthday}
                  onChange={this.handleDateChange}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  className="contact-create-form__input"
                />
              </div>
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="gender" className="contact-create-form__label">Gender:</label>
                <select name="contactGender" className="contact-create-form__input__select" value={this.state.contactGender} onChange={this.handleInputChange}>
                  <option disabled value="">Choose the gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="family" className="contact-create-form__label">Family status:</label>
                <select name="contactFamily" className="contact-create-form__input__select" value={this.state.contactFamily} onChange={this.handleInputChange}>
                  <option disabled value="">Family status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </div>
            <div className="contact-create-form__container__title">
              Location information:
            </div>
            <div className="contact-create-form__container__input-block">
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="country" className="contact-create-form__label">Country:</label>
                <input name="contactCountry" id="country" type="text" placeholder="Country" className="contact-create-form__input" value={this.state.contactCountry} onChange={this.handleInputChange}/>
              </div>
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="city" className="contact-create-form__label">City:</label>
                <input name="contactCity" id="city" type="text" placeholder="City" className="contact-create-form__input" value={this.state.contactCity} onChange={this.handleInputChange}/>
              </div>
              <div className="contact-create-form__container__input-block__item">
                <label htmlFor="zip" className="contact-create-form__label">ZIP:</label>
                <input name="contactZip" id="zip" type="number" placeholder="ZIP" className="contact-create-form__input" value={this.state.contactZip} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div>
              <button className="contact-create-form__button" onClick={this.handleSearch}>
                Search
              </button>
            </div>
          </div>

          <div className="contact-list__container">
            {this.state.contacts.map(contact =>
              <ContactListItem
                key={contact.id}
                contact={contact}
              />,
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ContactSearchForm
