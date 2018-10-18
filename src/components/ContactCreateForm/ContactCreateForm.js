import React from 'react'
import './styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../Popup/popup.css'
import PersonalStep from './PersonalStep'
import LocationStep from './LocationStep'
import AdditionalStep from './AdditionalStep'
import PhonesStep from './PhonesStep'

class ContactCreateForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: {
        phones: [],
      },
      step: 'personal',
    }
  }

  handlePhoneChange = (phones) => {
    this.setState({
      contact: {
        ...this.state.contact, phones: phones,
      },
    })
  }
  handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name
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

  showList = () => {
    this.props.showListPanel()
  }

  showPersonalStep = () => {
    this.setState({
      ...this.state, step: 'personal',
    })
  }

  showLocationStep = () => {
    this.setState({
      ...this.state, step: 'location',
    })
  }

  showAdditionalStep = () => {
    this.setState({
      ...this.state, step: 'additional',
    })
  }

  showPhonesStep = () => {
    this.setState({
      ...this.state, step: 'phones',
    })
  }

  handleSubmit = async (phones) => {
    await this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        phones: phones,
      },
    })
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
    console.log('CONTACT IN FORM', this.state.contact)
    return (
      <div className="contact-create-form__body">
        {(this.state.step === 'personal') ? (
          <PersonalStep
            handleInputChange={this.handleInputChange}
            showLocationStep={this.showLocationStep}
            contact={this.state.contact}
          />) : (null)
        }
        {(this.state.step === 'location') ? (
          <LocationStep
            handleInputChange={this.handleInputChange}
            showAdditionalStep={this.showAdditionalStep}
            showPersonalStep={this.showPersonalStep}
            contact={this.state.contact}
          />) : (null)
        }
        {(this.state.step === 'additional') ? (
          <AdditionalStep
            handleInputChange={this.handleInputChange}
            showLocationStep={this.showLocationStep}
            showPhonesStep={this.showPhonesStep}
            contact={this.state.contact}
          />) : (null)
        }
        {(this.state.step === 'phones') ? (
          <PhonesStep
            handlePhoneChange={this.handlePhoneChange}
            saveContact={this.handleSubmit}
            showAdditionalStep={this.showAdditionalStep}
            phones={this.state.contact.phones}
          />) : (null)
        }
      </div>
    )
  }
}

export default ContactCreateForm
