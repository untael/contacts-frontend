import React from 'react'
import './styles.css'

class AdditionalStep extends React.Component {
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

  showLocationStep = () => {
    this.props.showLocationStep()
  }

  showPhonesStep = () => {
    this.saveData()
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
              <input name='email' id='email' type='text' placeholder='E-mail' className='contact-create-form__input' value={this.state.contact.email} onChange={this.handleInputChange}/>
            </div>
            <div className='contact-create-form__container__input-block__item'>
              <label htmlFor='website' className='contact-create-form__label'>Website:</label>
              <input name='website' id='website' type='text' placeholder='Website' className='contact-create-form__input' value={this.state.contact.website} onChange={this.handleInputChange}/>
            </div>
            <div className='contact-create-form__container__input-block__item'>
              <label htmlFor='job' className='contact-create-form__label'>Current job:</label>
              <input name='job' id='job' type='text' placeholder='Current job' className='contact-create-form__input' value={this.state.contact.job} onChange={this.handleInputChange}/>
            </div>
            <div className='contact-create-form__container__input-block__item__textarea'>
              <label htmlFor='about' className='contact-create-form__label'>About me:</label>
              <textarea name='about' id='about' placeholder='Tell us about yourself' className='contact-create-form__textarea' value={this.state.contact.about} onChange={this.handleInputChange}></textarea>
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

