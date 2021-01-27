import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Calculations';
import Price from '../Components/Price';

const mapStateToProps = ({ buildings }) => ({
  result: buildings.result,
  building: buildings.building,
  height: buildings.height,
  material: buildings.material,
  sizex: buildings.sizex,
  sizey: buildings.sizey,
  status: buildings.status,
  message: buildings.message
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Price);
