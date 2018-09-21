import { actionTypes } from "../reducers/constants";


export const login = ({ email, password }) => {
  return { type: actionTypes.login, email, password };
};
export const signup = ({ firstName, lastNames, email, password }) => {
  return { type: actionTypes.signup, firstName, lastNames, email, password };
};
export const postNotification = ({ messageType, message }) => {
  return { type: actionTypes.postNotificatoin, messageType: messageType, message: message };
};
export const addQuoteFormSection = () => {
  return { type: actionTypes.addQuoteFormSection };
};
export const removeQuoteFormSection = (title) => {
  return { type: actionTypes.removeQuoteFormSection, title: title };
};
export const addQuoteSectionItem = (title) => {
  return { type: actionTypes.addQuoteSectionItem, title: title };
};
export const removeQuoteSectionItem = ({ title, id }) => {
  return { type: actionTypes.removeQuoteSectionItem, title: title, id: id };
};
export const navBarSearch = (searchString) => {
  return { type: actionTypes.navBarSearch, searchString: searchString };
};