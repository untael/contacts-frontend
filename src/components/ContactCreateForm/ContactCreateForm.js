import React from 'react'
import './styles.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../Popup/popup.css'
import PersonalStep from './containers/PersonalStep'
import LocationStep from './containers/LocationStep'
import AdditionalStep from './containers/AdditionalStep'

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
            saveContact={this.handleSubmit}
            showLocationStep={this.showLocationStep}
            contact={this.state.contact}
          />) : (null)
        }
        {/*<div className="contact-create-form__container__title">*/}
        {/*Contact phones:*/}
        {/*</div>*/}
        {/*<div className="contact-create-form__container__input-block">*/}
        {/*<div className="contact-create-form__container__input-block__item">*/}
        {/*<label htmlFor="number" className="contact-create-form__label">Phone</label>*/}
        {/*<InputMask*/}
        {/*name="number"*/}
        {/*id="number"*/}
        {/*onChange={this.handleInputChange}*/}
        {/*value={this.state.contact.phone}*/}
        {/*className="contact-create-form__input"*/}
        {/*mask="+375\(99)999-99-99"*/}
        {/*/>*/}
        {/*</div>*/}
        {/*<div className="contact-create-form__container__input-block__item">*/}
        {/*<label htmlFor="type" className="contact-create-form__label">Type:</label>*/}
        {/*<select name="type" className="contact-create-form__input__select" value={this.state.contact.phone} onChange={this.handleInputChange}>*/}
        {/*<option disabled selected value="">Type of phone</option>*/}
        {/*<option value="male">Home</option>*/}
        {/*<option value="female">Mobile</option>*/}
        {/*</select>*/}
        {/*</div>*/}
        {/*<div className="contact-create-form__container__input-block__item">*/}
        {/*<label htmlFor="comment" className="contact-create-form__label">Comment:</label>*/}
        {/*<input name="comment" id="comment" type="text" placeholder="Comment" className="contact-create-form__input" value={this.state.contact.phone} onChange={this.handleInputChange}/>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
    )
  }
}

export default ContactCreateForm
