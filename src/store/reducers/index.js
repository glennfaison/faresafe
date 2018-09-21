import { combineReducers } from 'redux';
import { routes, personnelTypes, pricingTypes } from './constants';
import thisUser from './thisUser';
import navBarSearch from './navBarSearch';

export default combineReducers({
  "routes": routes,
  "pricingTypes": pricingTypes,
  "personnelTypes": personnelTypes,
  "navBarSearch": navBarSearch,
  "thisUser": thisUser
});