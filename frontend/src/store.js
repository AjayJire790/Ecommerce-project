import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Ensure the path is correct

const store = configureStore({
  reducer: rootReducer,
});

export default store;