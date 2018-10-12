import { connect } from 'react-redux'
import ContactExplorer from '../ContactExplorer'
import {
  getContacts,
  showList,
  showSearch,
  showEdit,
  loadContacts, showCreate,
} from '../../../actions/actions'

const mapStateToProps = (state) => ({
  showList: state.panels.showList,
  showSearch: state.panels.showSearch,
  showEdit: state.panels.showEdit,
  showDisplay: state.panels.showDisplay,
  showLoader: state.panels.showLoader,
  contacts: state.contacts.contacts,
  pageNumber: state.contacts.pageNumber,
})

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
  getMoreContacts: (pageNumber) => dispatch(loadContacts(pageNumber)),
  showListPanel: () => dispatch(showList()),
  showSearchPanel: () => dispatch(showSearch()),
  showEditPanel: () => dispatch(showEdit()),
  showCreatePanel: () => dispatch(showCreate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactExplorer)
