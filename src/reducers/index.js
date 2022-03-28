import { combineReducers } from "redux";

import windowReducer from "./window.reducer";

const rootReducer = combineReducers({
  window: windowReducer,
});

export default rootReducer;
