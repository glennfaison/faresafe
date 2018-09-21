const routeState = {
  "baseRoute": "faresafe",
  "welcome": "/welcome",
  "submitForm": "/submit-form",
  "submissionSuccess": "/submit-success",
  "contactUs": "/contact-us",
  "root": "/",
  "login": "/login",
  "signup": "/signup",
  "profile": "/profile",
  "error": "/error",
  "newQuote": "/newquote"
};
const pricingTypeState = {
  "fixed": "fixed",
  "hourly": "hourly",
  "daily": "daily",
};
const personnelTypeState = {
  "translator": "translator",
  "interpreter": "interpreter",
  "soundEngineer": "sound engineer"
};

export const routes = (route = routeState, action) => {
  let type = action.type || undefined;
  switch (type) {
    default:
      return route;
  }
};
export const pricingTypes = (route = pricingTypeState, action) => {
  let type = action.type || undefined;
  switch (type) {
    default:
      return route;
  }
};
export const personnelTypes = (route = personnelTypeState, action) => {
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
  "postNotificatoin": "postNotificatoin",
  "addQuoteFormSection": "addQuoteFormSection",
  "removeQuoteFormSection": "removeQuoteFormSection",
  "addQuoteSectionItem": "addQuoteSectionItem",
  "removeQuoteSectionItem": "removeQuoteSectionItem",
};
