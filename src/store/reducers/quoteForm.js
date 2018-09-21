import { pricingTypes, personnelTypes, actionTypes } from "./constants";

const initialSectionItemState = {
  "id": "",
  "description": "",
  "personnelType": personnelTypes.translator,
  "_personnel": 0,
  get "personnel"() { return this["_personnel"]; },
  set "personnel"(value) {
    this["_personnel"] = value;
  },
  "timeType": "",
  "_time": 0,
  get "time"() { return this["_time"]; },
  set "time"(value) {
    this["_time"] = value;
  },
  "pricingType": pricingTypes.daily,
  "_pricing": 0,
  get "pricing"() { return this["_pricing"]; },
  set "pricing"(value) {
    this["_pricing"] = value;
  },
  get "amount"() {
    return (this["_pricingType"] === pricingTypes.fixed) ?
      this["_pricing"] : this["_personnel"] * this["_time"];
  },
};

const initialSectionState = {
  "title": "New Section",
  "description": "",
  "items": [
    initialSectionItemState
  ],
  get "total"() {
    let total = 0;
    for (let i = 0; i < this["items"].length; i++) {
      total += this["items"][i].amount;
    }
    return total;
  },
};

const initialFormState = {
  get "id"() { return this["_id"]; },
  "date": "",
  "to": "",
  "event": "",
  "venue": "",
  "sections": [
    initialSectionState
  ],
  get "total"() {
    let total = 0;
    for (let i = 0; i < this.sections.length; i++) {
      total += this.sections[i].total;
    }
    return total;
  },
};

const quoteForm = (state = initialFormState, action) => {
  state = JSON.parse(JSON.stringify(state));
  let type = action.type || undefined;
  switch (type) {
    case actionTypes.addQuoteFormSection:
      state.sections.push(initialSectionState);
      return state;
    case actionTypes.addQuoteSectionItem:
      state.sections.push(initialSectionItemState);
      return state;
    case actionTypes.removeQuoteFormSection:
      state.sections.push(action.title);
      return state;
    case actionTypes.removeQuoteSectionItem:
      state.sections.push(action.title, action.id);
      return state;
    default:
      return state;
  }
};

export default quoteForm;