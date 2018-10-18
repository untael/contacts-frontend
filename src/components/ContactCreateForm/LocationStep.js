import React from 'react'
import './styles.css'
import 'react-datepicker/dist/react-datepicker.css'

class LocationStep extends React.Component {
  constructor (props) {
    super(props)
  }

  handleInput = (event) => {
    this.props.handleInputChange(event)
  }

  showPersonalStep = () => {
    this.props.showPersonalStep()
  }

  showAdditionalStep = () => {
    this.props.showAdditionalStep()
  }

  componentDidMount () {
    if (this.props.contact) {
      this.setState({
        ...this.state, contact: this.props.contact,
      })
    }
  }

  render () {
    return (
      <div className="contact-create-form__container">
        <div className="contact-create-form__container__title">
          Location information:
        </div>
        <div className="contact-create-form__container__input-block">
          <div className="contact-create-form__container__input-block__item">
            <label htmlFor="country" className="contact-create-form__label">Country:</label>
            <input name="country" id="country" type="text" placeholder="Country" className="contact-create-form__input" value={this.props.contact.country} onChange={this.handleInput}/>
          </div>
          <div className="contact-create-form__container__input-block__item">
            <label htmlFor="city" className="contact-create-form__label">City:</label>
            <input name="city" id="city" type="text" placeholder="City" className="contact-create-form__input" value={this.props.contact.city} onChange={this.handleInput}/>
          </div>
          <div className="contact-create-form__container__input-block__item">
            <label htmlFor="zip" className="contact-create-form__label">ZIP:</label>
            <input name="zip" id="zip" type="number" placeholder="ZIP" className="contact-create-form__input" value={this.props.contact.zip} onChange={this.handleInput}/>
          </div>
          <div className="contact-create-form__container__input-block__item__textarea">
            <label htmlFor="address" className="contact-create-form__label">Address:</label>
            <textarea name="address" id="address" placeholder="Place" className="contact-create-form__textarea" value={this.props.contact.address} onChange={this.handleInput}></textarea>
          </div>
        </div>
        <div>
          <button className="contact-create-form__button" onClick={this.showAdditionalStep}>
            Next
          </button>
          <button className="contact-create-form__button" onClick={this.showPersonalStep}>
            Back
          </button>
        </div>
      </div>
    )
  }
}

export default LocationStep
