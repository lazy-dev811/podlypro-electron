// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import WorkStudioComponent from '../components/WorkStudio';

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
)(WorkStudioComponent);
