import React from 'react'
import './styles.css'

class PersonalStep extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: {
        image: '',
      },
    }
  }

  showLocationStep = () => {
    this.saveData()
    this.props.showLocationStep()
  }

  saveData = () => {
    this.props.saveData(this.state.contact)
  }

  handleInputChange = (event) => {
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
        contact: {
          ...this.state.contact, [name]: undefined,
        },
      })
    }
    console.log('this.state.contact', this.state.contact)
  }

  handleUploadFile = () => {
    const fileInput = document.getElementById('image')
    fileInput.click()
  }

  componentDidMount () {
    if (this.props.contact) {
      this.setState({
        ...this.state, contact: this.props.contact,
      })
    }
  }

  fileChangedHandler = (event) => {
    this.setState({
      contact: {
        ...this.state.contact, image: event.target.files[0],
      },
    })
  }

  render () {
    console.log('Contact', this.state.contact)
    return (
      <div>
        <div className="contact-create-form__container">
          <div className="contact-create-form__avatar-area">
            <div className="contact-create-form__container__title">
              Personal information:
            </div>
            <div className="contact-create-form__avatar" onClick={this.handleUploadFile}>
              Upload
            </div>
            <input name="image" id="image" type="file" className="contact-create-form__input__file" onChange={this.fileChangedHandler}/>
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
          <div>
            <button className="contact-create-form__button" onClick={this.showLocationStep}>
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalStep

