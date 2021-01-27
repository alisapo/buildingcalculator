import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Calculations';
import Floors from '../Components/Floors';

const mapStateToProps = ({ height }) => ({ 
  height: height,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Floors);
