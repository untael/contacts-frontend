import React from 'react'
import './styles.css'

class PersonalStep extends React.Component {
  constructor (props) {
    super(props)
  }

  handleInput = (event) => {
    this.props.handleInputChange(event)
  }

  showLocationStep = () => {
    this.props.showLocationStep()
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
              <input required name="name" id="name" type="text" placeholder="Name*" className="contact-create-form__input" value={this.props.contact.name} onChange={this.handleInput}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <input required name="surname" type="text" placeholder="Surname*" className="contact-create-form__input" value={this.props.contact.surname} onChange={this.handleInput}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <input name="middlename" type="text" placeholder="Middlename" className="contact-create-form__input" value={this.props.contact.middlename} onChange={this.handleInput}/>
            </div>
          </div>
          <div className="contact-create-form__container__input-block">
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="birthday" className="contact-create-form__label">Birthday:</label>
              <input name="birthday" type="date" placeholder="Birthday" className="contact-create-form__input" value={this.props.contact.birthday} onChange={this.handleInput}/>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="gender" className="contact-create-form__label">Gender:</label>
              <select name="gender" className="contact-create-form__input__select" value={this.props.contact.gender} onChange={this.handleInput}>
                <option disabled value="" selected="selected">Choose your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="contact-create-form__container__input-block__item">
              <label htmlFor="family" className="contact-create-form__label">Family status:</label>
              <select name="family" className="contact-create-form__input__select" value={this.props.contact.family} onChange={this.handleInput}>
                <option disabled value="" selected="selected">Family status</option>
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

