import { actionTypes } from "../reducers/constants";


export const login = ({ email, password }) => {
  return { type: actionTypes.login, email, password };
};
export const signup = ({ firstName, lastNames, email, password }) => {
  return { type: actionTypes.signup, firstName, lastNames, email, password };
};
export const submitPassengerInfo = ({ name, address, dob, passengerID, proof }) => {
  return { type: actionTypes.submitPassengerInfo, name, address, dob, passengerID, proof };
};
export const contactUs = ({ name, email, subject, message }) => {
  return { type: actionTypes.contactUs, name, email, subject, message };
};
export const postNotification = ({ messageType, message }) => {
  return { type: actionTypes.postNotification, messageType: messageType, message: message };
};
export const navBarSearch = (searchString) => {
  return { type: actionTypes.navBarSearch, searchString: searchString };
};