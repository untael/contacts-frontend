import { connect } from 'react-redux'
import ContactListItem from '../ContactListItem'
import { showDisplay, showEdit, deleteContact } from '../../../actions/actions'

const mapStateToProps = (state) => ({
  showDisplay: state.panels.showDisplay,
})

const mapDispatchToProps = (dispatch) => ({
  showDisplayPanel: (contact) => dispatch(showDisplay(contact)),
  showEditPanel: (contact) => dispatch(showEdit(contact)),
  deleteContact: (contactId) => dispatch(deleteContact(contactId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem)
