import React from 'react'
import './styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import UI from '../Popup/index'
import Toast from '../Popup/toast'
import '../Popup/popup.css'
import InputMask from 'react-input-mask'

class ContactCreateForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: {
        // phones: [],
      },
    }
  }

  closeCreate = () => {
    this.props.closeCreate()
  }

  componentDidMount = () => {
    if (this.props.contact) {
      this.setState({
        contact: this.props.contact,
      })
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    // console.log(name)
    // console.log(value)
    // if (name === 'number' || name === 'type' || name === 'comment') {
    //   console.log('you are here')
    //   this.setState({
    //     contact: {
    //       ...this.state.contact.phones, [name]: value,
    //     },
    //   })
    //   console.log('state', this.state.contact)
    // }
    if (value !== '') {
      this.setState({
        contact: {
          ...this.state.contact, [name]: value,
        },
      })
    } else {
      this.setState({
        contact: {
          ...this.state.contact, [name]: undefined,
        },
      })
    }
  }

  handleUploadFile = () => {
    const fileInput = document.getElementById('image')
    fileInput.click()
  }

  handleSubmit = () => {
    console.log(this.state.contact)
    if ((this.state.contact.name) && (this.state.contact.surname)) {
      UI.Toast.create(Toast.type.SUCCESS, 'Contact successfully created')
      const contact = this.state.contact
      axios.post('http://localhost:3000/create', { contact })
        .then(res => {
        })
    } else {
      UI.Toast.create(Toast.type.ERROR, 'Fill required fields')
    }
    this.props.updateList()
  }

  render () {
    return (
      <div className="contact-create-form__body">
        <div className="contact-create-form__container">
          <div className="contact-create-form__avatar-area">
            <div className="contact-create-form__container__title">
              Personal information:
            </div>
            <div className="contact-create-form__avatar" onClick={this.handleUploadFile}>
            Upload
            </div>
            <input name="image" id="image" type="file" className="contact-create-form__input__file" value={this.state.contact.image} onChange={this.handleInputChange}/>
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="name" className="contact-create-form__label">Full name:</label>
              <input required name="name" id="name" type="text" placeholder="Name*" className="contact-create-form__input" value={this.state.contact.name} onChange={this.handleInputChange}/>
            </div>
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
              <input name="birthday" type="date" placeholder="Birthday" className="contact-create-form__input" value={this.state.contact.birthday} onChange={this.handleInputChange}/>
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
          <div className="contact-create-form__container__title">
            Contact phones:
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="number" className="contact-create-form__label">Phone</label>
              <InputMask
                name="number"
                id="number"
                onChange={this.handleInputChange}
                value={this.state.contact.phone}
                className="contact-create-form__input"
                mask="+375\(99)999-99-99"
              />
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="type" className="contact-create-form__label">Type:</label>
              <select name="type" className="contact-create-form__input__select" value={this.state.contact.phone} onChange={this.handleInputChange}>
                <option disabled selected value="">Type of phone</option>
                <option value="male">Home</option>
                <option value="female">Mobile</option>
              </select>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="comment" className="contact-create-form__label">Comment:</label>
              <input name="comment" id="comment" type="text" placeholder="Comment" className="contact-create-form__input" value={this.state.contact.phone} onChange={this.handleInputChange}/>
            </div>
          </div>
          <div>
            <button className="contact-create-form__button" onClick={this.handleSubmit}>
              Submit
            </button>
            <button className="contact-create-form__button" onClick={this.closeCreate}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCreateForm
