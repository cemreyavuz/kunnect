import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from './Register.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
