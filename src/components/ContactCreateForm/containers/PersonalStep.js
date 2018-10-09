import { connect } from 'react-redux'
import PersonalStep
  from '../PersonalStep'
import { saveContactData } from '../../../actions/actions'

const mapStateToProps = (state) => ({
  contact: state.panels.contact,
})
const mapDispatchToProps = (dispatch) => ({
  saveData: (contact) => dispatch(saveContactData(contact)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PersonalStep)
