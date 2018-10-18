import React from 'react'
import './styles.css'
import InputMask from 'react-input-mask'

class PhoneInputGroup extends React.Component {
  constructor (props) {
    super(props)
  }

  handleInput = (event) => {
    this.props.handleInputChange(event, this.props.phone.id)
  }

  addPhoneInputGroup = () => {
    this.props.addPhoneInputGroup()
  }

  deletePhoneInputGroup = () => {
    this.props.deletePhoneInputGroup(this.props.phone.id)
  }

  render () {
    return (
      <div className="contact-create-form__container__input-block">
        <div className="contact-create-form__container__input-block__item">
          <label htmlFor="number" className="contact-create-form__label">Phone</label>
          <InputMask
            name="number"
            id="number"
            onChange={this.handleInput}
            value={this.props.phone.number}
            className="contact-create-form__input"
            mask="+375\(99)999-99-99"
          />
        </div>
        <div className="contact-create-form__container__input-block__item">
          <label htmlFor="type" className="contact-create-form__label">Type:</label>
          <select name="type" className="contact-create-form__input__select" value={this.props.phone.type} onChange={this.handleInput}>
            <option disabled selected value="">Type of phone</option>
            <option value="home">Home</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div className="contact-create-form__container__input-block__item">
          <label htmlFor="comment" className="contact-create-form__label">Comment:</label>
          <input name="comment" id="comment" type="text" placeholder="Comment" className="contact-create-form__input" value={this.props.phone.comment} onChange={this.handleInput}/>
        </div>
        <div className="contact-create-form__delete-row-button" onClick={this.deletePhoneInputGroup}>
          delete
        </div>
      </div>
    )
  }
}

export default PhoneInputGroup

