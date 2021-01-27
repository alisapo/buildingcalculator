import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import buildings from './Buildings';

export default combineReducers({
  routing: routerReducer,
  buildings,
});