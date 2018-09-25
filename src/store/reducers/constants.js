const routeState = {
  "baseRoute": "faresafe",
  "welcome": "/welcome",
  "submitForm": "/submit-form",
  "submissionSuccess": "/submit-success",
  "contactUs": "/contact-us",
  "aboutUs": "/about-us",
  "root": "/",
  "profile": "/profile",
  "error": "/error",
};

export const routes = (route = routeState, action) => {
  let type = action.type || undefined;
  switch (type) {
    default:
      return route;
  }
};
export const actionTypes = {
  "login": "login",
  "logout": "logout",
  "signup": "signup",
  "postNotification": "postNotification",
};
