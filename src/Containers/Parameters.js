import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Calculations';
import Parameters from '../Components/Parameters';

const mapStateToProps = ({ sizex, sizey }) => ({ 
  sizex: sizex,
  sizey: sizey
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parameters);
