// import { bindActionCreators } from 'redux'; // TODO
import { connect } from 'react-redux';
import Controller from '../components/Controller';

function mapStateToProps(state) {
  return {
    fileContext: state.fileContext
  };
}

// TODO
// function mapDispatchToProps(dispatch) {
//   return null;
// }

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(Controller);
