import { connect } from 'react-redux'
import { showList, saveContact } from '../../../actions/actions'
import ContactCreateForm
  from '../ContactCreateForm'

const mapStateToProps = (state) => ({
  contact: state.panels.contact,
})
const mapDispatchToProps = (dispatch) => ({
  showListPanel: () => dispatch(showList()),
  saveContact: (contact) => dispatch(saveContact(contact)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreateForm)
