import { combineReducers } from 'redux';
import { routes } from './constants';
import thisUser from './thisUser';
import navBarSearch from './navBarSearch';

export default combineReducers({
  "routes": routes,
  "navBarSearch": navBarSearch,
  "thisUser": thisUser
});