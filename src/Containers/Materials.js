import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Calculations';
import Materials from '../Components/Materials';

const mapStateToProps = ({ buildings }) => ({ 
  building: buildings.building,
  material: buildings.material
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Materials);
