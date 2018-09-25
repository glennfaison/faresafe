import { actionTypes } from "./constants";
import axios from 'axios';

const initialState = {
  "firstName": "admin",
  "lastNames": "",
  "email": "admin@gmail.com",
  "password": "admin"
};

let signup = (user) => {
  axios.post('http://localhost:8000/users/signup', user)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
};
let login = (email, password) => {
  let data = { email, password };
  axios.post('http://localhost:8000/users/login', data)
    .then(verifiedUserInfo => {
      let { token } = verifiedUserInfo.data;
      axios.post('http://localhost:8000/users/current', verifiedUserInfo, { headers: { 'Token': token } })
        .then(user => {
          return user;
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
  if (email === initialState.email) {
    if (password === initialState.password) {
      return initialState;
    }
  }
  return initialState;
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
      return null;
  }
};

export default thisUser;