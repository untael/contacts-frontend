import { connect } from 'react-redux'
import { showList, saveContact } from '../../../actions/actions'
import ContactSearchForm from '../ContactSearchForm'
const mapStateToProps = (state) => ({
  contact: state.panels.contact,
})
const mapDispatchToProps = (dispatch) => ({
  showListPanel: () => dispatch(showList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactSearchForm)
