import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Calculations';
import App from '../Components/App';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapDispatchToProps
)(App);
