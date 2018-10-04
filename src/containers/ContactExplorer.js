import { connect } from 'react-redux'
import ContactExplorer from '../components/ContactExplorer/ContactExplorer'

const mapStateToProps = (state, ownProps) => ({
  showDefault: state.contactPanels('SHOW_DEFAULT'),
})
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
// })
export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ContactExplorer)
