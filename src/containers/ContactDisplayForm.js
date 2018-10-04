import { connect } from 'react-redux'
import ContactDisplayForm
  from '../components/ContactDisplayForm/ContactDisplayForm'
import { showList } from '../actions/actions'

const mapStateToProps = (state) => ({
  contact: state.panels.contact,
})
const mapDispatchToProps = (dispatch) => ({
  showListPanel: () => dispatch(showList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactDisplayForm)
