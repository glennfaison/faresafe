import { actionTypes } from "./constants";

const searchFunction = (searchString) => { };

const navBarSearch = (state = null, action) => {
  let type = action.type || undefined;
  switch (type) {
    case actionTypes.navBarSearch:
      return searchFunction(action.searchString);
    default:
      return state;
  }
};

export default navBarSearch;