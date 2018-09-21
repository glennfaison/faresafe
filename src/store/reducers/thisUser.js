import { actionTypes } from "./constants";

const initialState = {
  "firstName": "Glenn",
  "lastName": "Faison Tiayon",
  "email": "glennfaison@gmail.com",
  "password": "glennfaison",
  "personalLink": "glennfaison",
  "coverPhotoPath": process.env.PUBLIC_URL + "/images/Language Solutions Letter Head.png",
  "profilePhotoPath": process.env.PUBLIC_URL + "/images/ls-icon-1.png"
};

let login = (email, password) => {
  if (email === initialState.email) {
    if (password === initialState.password) {
      return initialState;
    }
  }
  return null;
};
let logout = (email, password) => {
  return undefined;
};

const thisUser = (state = initialState, action) => {
  let type = action.type || undefined;
  switch (type) {
    case actionTypes.login:
      return login(action.email, action.password);
    case actionTypes.logout:
      return logout(action.email, action.password);
    default:
      return state;
  }
};

export default thisUser;