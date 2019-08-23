// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

function mapStateToProps(state) {
  return {
    state
  };
}

/* TODO: Add actions */
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators()
// }

export default connect(
  mapStateToProps,
  null
)(SidebarComponent);
