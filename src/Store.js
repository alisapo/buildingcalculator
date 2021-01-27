import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers';

export default () => {
  let store = createStore(rootReducer, applyMiddleware());
  return store;
};
