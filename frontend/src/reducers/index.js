import { combineReducers } from "@reduxjs/toolkit";
import someReducer from "./someReducer";

const rootReducer = combineReducers({
  someReducer, // Add other reducers here
});

export default rootReducer;
