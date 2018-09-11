import React from 'react'
import './styles.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import axios from 'axios'
import UI from '../Popup/index'
import Popup from '../Popup/popup'
import Modal from '../Popup/modal'
import Toast from '../Popup/toast'
import popup from '../Popup/popup.css'

class ContactEditForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactId: undefined,
      contactName: undefined,
      contactSurname: undefined,
      contactMiddlename: undefined,
      contactBirthday: moment(),
      contactGender: undefined,
      contactFamily: undefined,
      contactCountry: undefined,
      contactCity: undefined,
      contactZip: undefined,
      contactAddress: undefined,
      contactEmail: undefined,
      contactWebsite: undefined,
      contactJob: undefined,
      contactAbout: undefined,
      contactImage: undefined,
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDateChange (date) {
    // console.log(date)
    this.setState({
      contactBirthday: date,
    })
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

  handleUploadFile () {
    const fileInput = document.getElementById('file')
    fileInput.click()
  }

  handleSubmit () {
    if ((this.state.contactName === undefined || '') || (this.state.contactSurname === undefined || '')) {
      UI.Toast.create(Toast.type.ERROR, 'Fill required fields')
    } else {
      UI.Toast.create(Toast.type.SUCCESS, 'Contact successfully updated')
      const contact = {
        id: this.state.contactId,
        name: this.state.contactName,
        surname: this.state.contactSurname,
        middlename: this.state.contactMiddlename,
        birthday: this.state.contactBirthday,
        gender: this.state.contactGender,
        family: this.state.contactFamily,
        country: this.state.contactCountry,
        city: this.state.contactCity,
        zip: this.state.contactZip,
        address: this.state.contactAddress,
        email: this.state.contactEmail,
        website: this.state.contactWebsite,
        job: this.state.contactJob,
        about: this.state.contactAbout,
        image: this.state.contactImage,
      }
      axios.post('http://localhost:3000/Update', { contact })
        .then(res => {
        })
      console.log(contact)
    }
  }

  render () {
    return (
      <div className="contact-create-form__body">
        <div className="contact-create-form__container">
          <div className="contact-create-form__avatar-area">
            <div className="contact-create-form__container__title">
              Personal information:
            </div>
            {/*<div className="contact-create-form__avatar" onClick={this.handleUploadFile}>*/}
            {/*Upload*/}
            {/*</div>*/}
            {/*<input id="file" type="file" className="contact-create-form__input__file"/>*/}
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="name" className="contact-create-form__label">Full name:</label>
              <input required name="contactName" id="name" type="text" placeholder="Name*" className="contact-create-form__input" value={this.props.contact.name} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <input required name="contactSurname" type="text" placeholder="Surname*" className="contact-create-form__input" value={this.props.contact.surname} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <input name="contactMiddlename" type="text" placeholder="Middlename" className="contact-create-form__input" value={this.props.contact.middlename} onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="birthday" className="contact-create-form__label">Birthday:</label>
              <DatePicker
                name="contactBirthday"
                dateFormat="DD.MM.YYYY"
                //TODO get normal datepicker format
                // selected={this.props.contact.birthday}
                onChange={this.handleDateChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                className="contact-create-form__input"
                placeholderText="Tap for open datepicker"
              />
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="gender" className="contact-create-form__label">Gender:</label>
              <select name="contactGender" className="contact-create-form__input__select" value={this.props.contact.gender} onChange={this.handleInputChange}>
                <option disabled value="">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="family" className="contact-create-form__label">Family status:</label>
              <select name="contactFamily" className="contact-create-form__input__select" value={this.props.contact.family} onChange={this.handleInputChange}>
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
              <input name="contactCountry" id="country" type="text" placeholder="Country" className="contact-create-form__input" value={this.props.contact.country} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="city" className="contact-create-form__label">City:</label>
              <input name="contactCity" id="city" type="text" placeholder="City" className="contact-create-form__input" value={this.props.contact.city} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="zip" className="contact-create-form__label">ZIP:</label>
              <input name="contactZip" id="zip" type="number" placeholder="ZIP" className="contact-create-form__input" value={this.props.contact.zip} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item__textarea">
              <label htmlFor="address" className="contact-create-form__label">Address:</label>
              <textarea name="contactAddress" id="address" placeholder="Place" className="contact-create-form__textarea" value={this.props.contact.address} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className="contact-create-form__container__title">
            Additional information:
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="email" className="contact-create-form__label">E-mail:</label>
              <input name="contactEmail" id="email" type="text" placeholder="E-mail" className="contact-create-form__input" value={this.props.contact.email} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="website" className="contact-create-form__label">Website:</label>
              <input name="contactWebsite" id="website" type="text" placeholder="Website" className="contact-create-form__input" value={this.props.contact.website} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="job" className="contact-create-form__label">Current job:</label>
              <input name="contactJob" id="job" type="text" placeholder="Current job" className="contact-create-form__input" value={this.props.contact.job} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item__textarea">
              <label htmlFor="about" className="contact-create-form__label">About me:</label>
              <textarea name="contactAbout" id="about" placeholder="Tell us about yourself" className="contact-create-form__textarea" value={this.props.contact.about} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div>
            <button className="contact-create-form__button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactEditForm
