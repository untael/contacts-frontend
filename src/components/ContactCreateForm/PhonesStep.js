import React from 'react'
import './styles.css'
import PhoneInputGroup from './PhoneInputGroup'

class PhonesStep extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      phones: [],
    }
  }

  getId = () => {
    let text = ''
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  }

  handleInputChange = async (event, id) => {
    const name = event.target.name
    const value = event.target.value
    if (value !== '') {
      const phones = this.state.phones.map(phone => (phone.id === id) ? {
        ...phone,
        [name]: value,
      } : phone)
      await this.setState({
        phones: phones,
      })
      this.props.handlePhoneChange(this.state.phones)
    } else {
      const phones = this.state.phones.map(phone => (phone.id === id) ? {
        ...phone,
        [name]: undefined,
      } : phone)
      await this.setState({
        phones: phones,
      })
      this.props.handlePhoneChange(this.state.phones)
    }
  }

  showAdditionalStep = () => {
    this.props.showAdditionalStep()
  }

  saveContact = () => {
    this.props.saveContact(this.state.phones)
  }

  addPhoneInputGroup = () => {
    const phone = {
      id: this.getId(),
    }
    this.state.phones.push(phone)
    this.setState({
      phones: this.state.phones,
    })
  }

  deletePhoneInputGroup = (id) => {
    console.log('this.state.phones.length', this.state.phones.length)
    if (this.state.phones.length > 1) {
      const phones = this.state.phones.filter(
        (phone) => phone.id !== id)
      this.setState({
        phones: phones,
      })
    }
  }


  componentDidMount () {
    if (this.props.phones) {
      this.setState({
        phones: this.props.phones,
      })
    } else {
      const phone = {
        id: this.getId(),
      }
      this.state.phones.push(phone)
      this.setState({
        phones: this.state.phones,
      })
    }
  }

  render () {
    console.log('this.state.phones', this.state.phones)
    return (
      <div className="contact-create-form__container">
        <div>
          <div className="contact-create-form__container__title">
            Contact phones:
          </div>
          {this.state.phones[0] ? (
            <div>
              {this.state.phones.map(phone =>
                <PhoneInputGroup
                  key={phone.id}
                  phone={phone}
                  handleInputChange={this.handleInputChange}
                  deletePhoneInputGroup={this.deletePhoneInputGroup}
                />,
              )}
            </div>
          ) : (null)}
          <button className="contact-create-form__button" onClick={this.addPhoneInputGroup}>
            +
          </button>
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

