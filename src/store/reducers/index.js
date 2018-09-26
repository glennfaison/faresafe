import { combineReducers } from 'redux';
import { routes } from './constants';
import thisUser from './thisUser';

export default combineReducers({
  "routes": routes,
  "thisUser": thisUser
});