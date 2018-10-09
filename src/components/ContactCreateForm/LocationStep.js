import React from 'react'
import './styles.css'
import 'react-datepicker/dist/react-datepicker.css'

class LocationStep extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: {},
    }
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
  }

  onClick = () => {
    this.showAdditionalStep()
    this.saveData()
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
        <div>
          <button className="contact-create-form__button" onClick={this.onClick}>
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
