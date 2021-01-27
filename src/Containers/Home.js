import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Calculations';
import Home from '../Components/Home';

const mapStateToProps = ({ buildings }) => ({ 
  building: buildings.building,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
