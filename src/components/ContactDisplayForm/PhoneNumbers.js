import React from 'react'
import './styles.css'

class PhoneNumbers extends React.Component {

  showList = () => {
    this.props.showListPanel()
  }

  render () {
    return (
      <div className="contact-display__container__info-block">
        <div className="contact-display__container__info-block__item">
          <label htmlFor="number" className="contact-display__label">Number</label>
          <div id="number" className="contact-display-form__info-block__item__phone">
            {this.props.phone.number ? (
              <div>
                {this.props.phone.number}
              </div>
            ) : 'Unknown'}
          </div>
        </div>
        <div className="contact-display__container__info-block__item">
          <label htmlFor="type" className="contact-display__label">Type</label>
          <div id="type" className="contact-display-form__info-block__item__phone">
            {this.props.phone.type ? (
              <div>
                {this.props.phone.type}
              </div>
            ) : 'Unknown'}
          </div>
        </div>
        <div className="contact-display__container__info-block__item">
          <label htmlFor="comment" className="contact-display__label">Comment</label>
          <div id="comment" className="contact-display-form__info-block__item__phone">
            {this.props.phone.comment ? (
              <div>
                {this.props.phone.comment}
              </div>
            ) : '-'}
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneNumbers