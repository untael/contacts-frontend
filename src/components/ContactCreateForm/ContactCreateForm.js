import React from 'react'
import './styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../Popup/popup.css'
import PersonalStep from './containers/PersonalStep'
import LocationStep from './containers/LocationStep'
import AdditionalStep from './containers/AdditionalStep'
import PhonesStep from './containers/PhonesStep'

class ContactCreateForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: {},
      step: 'personal',
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

  componentDidMount () {
    if (this.props.contact) {
      this.setState({
        ...this.state, contact: this.props.contact,
      })
    }
  }

  handleSubmit = () => {
    this.props.saveContact(this.props.contact)
  }

  render () {
    console.log('this.state.contact 123', this.state.contact)
    return (
      <div className="contact-create-form__body">
        {(this.state.step === 'personal') ? (
          <PersonalStep
            showLocationStep={this.showLocationStep}
            contact={this.state.contact}
          />) : (null)
        }
        {(this.state.step === 'location') ? (
          <LocationStep
            showAdditionalStep={this.showAdditionalStep}
            showPersonalStep={this.showPersonalStep}
            contact={this.state.contact}
          />) : (null)
        }
        {(this.state.step === 'additional') ? (
          <AdditionalStep
            showLocationStep={this.showLocationStep}
            showPhonesStep={this.showPhonesStep}
            contact={this.state.contact}
          />) : (null)
        }
        {(this.state.step === 'phones') ? (
          <PhonesStep
            saveContact={this.handleSubmit}
            showAdditionalStep={this.showAdditionalStep}
            contact={this.state.contact}
          />) : (null)
        }

      </div>
    )
  }
}

export default ContactCreateForm
