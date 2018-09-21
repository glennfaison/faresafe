export default class Settings {
  static baseRoutes = {
    "root": "/",
    "userProfile": "/profile",
    "login": "/login",
    "signup": "/signup",
    "createQuote": "/create-quote",
    "printPreview": "/print-preview",
    "error": "/error",
  };
  static signals = {
    "signup": "signup",
    "login": "login",
    "logout": "logout",
    "addSectionRow": "addSectionRow",
    "deleteSection": "deleteSection",
    "updateQuoteSection": "updateQuoteSection",
    "updateWordedQuoteTotal": "updateWordedQuoteTotal",
    "NavbarSearchQuery": "NavbarSearchQuery",
    "setQuoteSectionHeight": "setQuoteSectionHeight",
  };
}