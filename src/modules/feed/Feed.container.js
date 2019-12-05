import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  createKuluster,
} from 'modules/kuluster/Kuluster.actions';
import {
  updateSelectedMenu,
} from 'common/redux/common.actions';
import Feed from './Feed.component';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    createKuluster,
    updateSelectedMenu,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
