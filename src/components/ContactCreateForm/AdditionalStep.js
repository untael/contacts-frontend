import React from 'react'
import './styles.css'

class AdditionalStep extends React.Component {
  constructor (props) {
    super(props)
  }

  handleInput = (event) => {
    this.props.handleInputChange(event)
  }

  showLocationStep = () => {
    this.props.showLocationStep()
  }

  showPhonesStep = () => {
    this.props.showPhonesStep()
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
          <div className='contact-create-form__container__title'>
            Additional information:
          </div>
          <div className='contact-create-form__container__input-block'>
            <div className='contact-create-form__container__input-block__item'>
              <label htmlFor='email' className='contact-create-form__label'>E-mail:</label>
              <input name='email' id='email' type='text' placeholder='E-mail' className='contact-create-form__input' value={this.props.contact.email} onChange={this.handleInput}/>
            </div>
            <div className='contact-create-form__container__input-block__item'>
              <label htmlFor='website' className='contact-create-form__label'>Website:</label>
              <input name='website' id='website' type='text' placeholder='Website' className='contact-create-form__input' value={this.props.contact.website} onChange={this.handleInput}/>
            </div>
            <div className='contact-create-form__container__input-block__item'>
              <label htmlFor='job' className='contact-create-form__label'>Current job:</label>
              <input name='job' id='job' type='text' placeholder='Current job' className='contact-create-form__input' value={this.props.contact.job} onChange={this.handleInput}/>
            </div>
            <div className='contact-create-form__container__input-block__item__textarea'>
              <label htmlFor='about' className='contact-create-form__label'>About me:</label>
              <textarea name='about' id='about' placeholder='Tell us about yourself' className='contact-create-form__textarea' value={this.props.contact.about} onChange={this.handleInput}></textarea>
            </div>
          </div>
        </div>
        <div>
          <button className="contact-create-form__button" onClick={this.showPhonesStep}>
            Next
          </button>
          <button className="contact-create-form__button" onClick={this.showLocationStep}>
            Back
          </button>
        </div>
      </div>
    )
  }
}

export default AdditionalStep

