import React from 'react'
import './styles.css'
import axios from 'axios'

class ContactDisplayForm extends React.Component {
  constructor () {
    super()
    this.hideDisplay = this.hideDisplay.bind(this)
  }

  hideDisplay () {
    this.props.hideDisplay()
  }

  render () {
    return (
      <div className="contact-display__body">
        <div className="contact-display__container">
          <div className="contact-display__container__title-block">
            <div className="contact-display__container__title">
              Personal information:
            </div>
            <div className="contact-display__container__close-button">
              <img src={require('../Popup/icons/close.png')} onClick={this.hideDisplay}></img>
            </div>
          </div>
          <div className="contact-display__container__info-block">
            <div className="contact-display__container__info-block__item">
              <label htmlFor="name" className="contact-display__label">Full name:</label>
              <div id="name">
                {this.props.contact.name} {this.props.contact.surname} {this.props.contact.middlename}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <div className="contact-display__avatar">
              </div>
            </div>
          </div>
          <div className="contact-display__container__info-block">
            <div className="contact-display__container__info-block__item">
              <label htmlFor="birthday" className="contact-display__label">Birthday:</label>
              <div id="birthday">
                {this.props.contact.birthday}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="gender" className="contact-display__label">Gender:</label>
              <div id="gender">
                {this.props.contact.gender}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="family" className="contact-display__label">Family status:</label>
              <div id="family">
                {this.props.contact.family}
              </div>
            </div>
          </div>
          <div className="contact-display__container__title">
            Location information:
          </div>
          <div className="contact-display__container__info-block">
            <div className="contact-display__container__info-block__item">
              <label htmlFor="country" className="contact-display__label">Country:</label>
              <div id="country">
                {this.props.contact.country}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="city" className="contact-display__label">City:</label>
              <div id="city">
                {this.props.contact.city}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="zip" className="contact-display__label">ZIP:</label>
              <div id="zip">
                {this.props.contact.zip}
              </div>
            </div>
            <div className="contact-create-form__container__input-block__item__textarea">
              <label htmlFor="address" className="contact-display__label">Address:</label>
              <div id="address">
                {this.props.contact.address}
              </div>
            </div>
          </div>
          <div className="contact-display__container__title">
            Additional information:
          </div>
          <div className="contact-display__container__info-block">
            <div className="contact-display__container__info-block__item">
              <label htmlFor="email" className="contact-display__label">E-mail:</label>
              <div id="email">
                {this.props.contact.email}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="website" className="contact-display__label">Website:</label>
              <div id="website">
                {this.props.contact.website}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="job" className="contact-display__label">Current job:</label>
              <div id="job">
                {this.props.contact.job}
              </div>
            </div>
            <div className="contact-create-form__container__input-block__item__textarea">
              <label htmlFor="about" className="contact-display__label">About me:</label>
              <div id="about">
                {this.props.contact.about}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactDisplayForm