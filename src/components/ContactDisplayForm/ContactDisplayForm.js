import React from 'react'
import './styles.css'

class ContactDisplayForm extends React.Component {
  closeDisplay = () => {
    this.props.closeDisplay()
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
              <img alt="img" src={require('../Popup/icons/close.png')} onClick={this.closeDisplay}></img>
            </div>
          </div>
          <div className="contact-display__container__info-block">
            <div className="contact-display__container__info-block__item">
              <label htmlFor="name" className="contact-display__label">Full name:</label>
              <div id="name" className="contact-display-form__info-block__item__text">
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
              <div id="birthday" className="contact-display-form__info-block__item__text">
                {this.props.contact.birthday}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="gender" className="contact-display__label">Gender:</label>
              <div id="gender" className="contact-display-form__info-block__item__text">
                {this.props.contact.gender}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="family" className="contact-display__label">Family status:</label>
              <div id="family" className="contact-display-form__info-block__item__text">
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
              <div id="country" className="contact-display-form__info-block__item__text">
                {this.props.contact.country}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="city" className="contact-display__label">City:</label>
              <div id="city" className="contact-display-form__info-block__item__text">
                {this.props.contact.city}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="zip" className="contact-display__label">ZIP:</label>
              <div id="zip" className="contact-display-form__info-block__item__text">
                {this.props.contact.zip}
              </div>
            </div>
            <div className="contact-display-form__container__input-block__item__textarea">
              <label htmlFor="address" className="contact-display__label">Address:</label>
              <div id="address" className="contact-display-form__info-block__item__text">
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
              <div id="email" className="contact-display-form__info-block__item__text">
                {this.props.contact.email}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="website" className="contact-display__label">Website:</label>
              <div id="website" className="contact-display-form__info-block__item__text">
                {this.props.contact.website}
              </div>
            </div>
            <div className="contact-display__container__info-block__item">
              <label htmlFor="job" className="contact-display__label">Current job:</label>
              <div id="job" className="contact-display-form__info-block__item__text">
                {this.props.contact.job}
              </div>
            </div>
            <div className="contact-display-form__container__input-block__item__textarea">
              <label htmlFor="about" className="contact-display__label">About me:</label>
              <div id="about" className="contact-display-form__info-block__item__text">
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