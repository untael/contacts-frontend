import { connect } from 'react-redux'
import PhonesStep
  from '../PhonesStep'
import { saveContactData } from '../../../actions/actions'

const mapStateToProps = (state) => ({
  contact: state.panels.contact,
})
const mapDispatchToProps = (dispatch) => ({
  saveData: (data) => dispatch(saveContactData(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PhonesStep)
