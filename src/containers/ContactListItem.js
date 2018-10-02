import { connect } from 'react-redux'
import ContactListItem from '../components/ContactListItem/ContactListItem'

const mapStateToProps = (state, ownProps) => ({

})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactListItem)
