import React from 'react'
import './styles.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import axios from 'axios'
import UI from '../Popup/index'
// import Popup from '../Popup/popup'
// import Modal from '../Popup/modal'
import Toast from '../Popup/toast'
import popup from '../Popup/popup.css'

class ContactEditForm extends React.Component {
  constructor () {
    super()
    this.state = {
      contact: {
        name: undefined,
        surname: undefined,
        middlename: undefined,
        birthday: moment(),
        gender: undefined,
        family: undefined,
        country: undefined,
        city: undefined,
        zip: undefined,
        address: undefined,
        email: undefined,
        website: undefined,
        job: undefined,
        about: undefined,
        image: undefined,
      },
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
  }

  componentDidMount () {
    console.log(this.props.contact)
    this.setState({
      contact: this.props.contact,
    })
  }

  handleDateChange (date) {
    // console.log(date)
    this.setState({
      contactBirthday: date,
    })
  }

  closeEdit () {
    this.props.closeEdit()
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    if (value !== '') {
      this.setState({
        contact: {
          ...this.state.contact, [name]: value,
        },
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
    if ((this.state.contact.name === undefined || '') || (this.state.contact.surname === undefined || '')) {
      UI.Toast.create(Toast.type.ERROR, 'Fill required fields')
    } else {
      UI.Toast.create(Toast.type.SUCCESS, 'Contact successfully updated')
      const contact = {
        id: this.state.contact.id,
        name: this.state.contact.name,
        surname: this.state.contact.surname,
        middlename: this.state.contact.middlename,
        birthday: this.state.contact.birthday,
        gender: this.state.contact.gender,
        family: this.state.contact.family,
        country: this.state.contact.country,
        city: this.state.contact.city,
        zip: this.state.contact.zip,
        address: this.state.contact.address,
        email: this.state.contact.email,
        website: this.state.contact.website,
        job: this.state.contact.job,
        about: this.state.contact.about,
        image: this.state.contact.image,
      }
      axios.post('http://localhost:3000/update', { contact })
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
              <input required name="name" id="name" type="text" placeholder="Name*" className="contact-create-form__input" value={this.state.contact.name} onChange={this.handleInputChange}/>
            </div>
            {console.log(this.state.contact.name)}
            <div className="contact-create-form__container__input-block__item">
              <input required name="surname" type="text" placeholder="Surname*" className="contact-create-form__input" value={this.state.contact.surname} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <input name="middlename" type="text" placeholder="Middlename" className="contact-create-form__input" value={this.state.contact.middlename} onChange={this.handleInputChange}/>
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
              <select name="gender" className="contact-create-form__input__select" value={this.state.contact.gender} onChange={this.handleInputChange}>
                <option disabled value="">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="family" className="contact-create-form__label">Family status:</label>
              <select name="family" className="contact-create-form__input__select" value={this.state.contact.family} onChange={this.handleInputChange}>
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
              <input name="country" id="country" type="text" placeholder="Country" className="contact-create-form__input" value={this.state.contact.country} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="city" className="contact-create-form__label">City:</label>
              <input name="city" id="city" type="text" placeholder="City" className="contact-create-form__input" value={this.state.contact.city} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="zip" className="contact-create-form__label">ZIP:</label>
              <input name="zip" id="zip" type="number" placeholder="ZIP" className="contact-create-form__input" value={this.state.contact.zip} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item__textarea">
              <label htmlFor="address" className="contact-create-form__label">Address:</label>
              <textarea name="address" id="address" placeholder="Place" className="contact-create-form__textarea" value={this.state.contact.address} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className="contact-create-form__container__title">
            Additional information:
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="email" className="contact-create-form__label">E-mail:</label>
              <input name="email" id="email" type="text" placeholder="E-mail" className="contact-create-form__input" value={this.state.contact.email} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="website" className="contact-create-form__label">Website:</label>
              <input name="website" id="website" type="text" placeholder="Website" className="contact-create-form__input" value={this.state.contact.website} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="job" className="contact-create-form__label">Current job:</label>
              <input name="job" id="job" type="text" placeholder="Current job" className="contact-create-form__input" value={this.state.contact.job} onChange={this.handleInputChange}/>
            </div>
            <div className="contact-create-form__container__input-block__item__textarea">
              <label htmlFor="about" className="contact-create-form__label">About me:</label>
              <textarea name="about" id="about" placeholder="Tell us about yourself" className="contact-create-form__textarea" value={this.state.contact.about} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div>
            <button className="contact-create-form__button" onClick={this.handleSubmit}>
              Submit
            </button>
            <button className="contact-create-form__button" onClick={this.closeEdit}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactEditForm
