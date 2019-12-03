import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EnsureLoggedIn from './EnsureLoggedIn.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
