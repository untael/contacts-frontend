import React from 'react'
import './styles.css'
import InputMask from 'react-input-mask'

class PhonesStep extends React.Component {
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

  showAdditionalStep = () => {
    this.props.showAdditionalStep()
  }

  saveContact = () => {
    this.saveData()
    console.log('this.state.contact', this.state.contact)
    this.props.saveContact(this.state.contact)
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
        <div>
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
        </div>
        <div>
          <button className="contact-create-form__button" onClick={this.saveContact}>
            Save
          </button>
          <button className="contact-create-form__button" onClick={this.showAdditionalStep}>
            Back
          </button>
        </div>
      </div>
    )
  }
}

export default PhonesStep

