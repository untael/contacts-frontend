import { connect } from 'react-redux'
import ContactExplorer from '../components/ContactExplorer/ContactExplorer'
import {
  getContacts,
  showList,
  showSearch,
  showEdit,
} from '../actions/actions'

const mapStateToProps = (state) => ({
  showList: state.panels.showList,
  showSearch: state.panels.showSearch,
  showEdit: state.panels.showEdit,
  showDisplay: state.panels.showDisplay,
  contacts: state.contacts.contacts,
})

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
  showListPanel: () => dispatch(showList()),
  showSearchPanel: () => dispatch(showSearch()),
  showEditPanel: () => dispatch(showEdit()),
})

export default connect(mapStateToProps, mapDispatchToProps,)(ContactExplorer)
