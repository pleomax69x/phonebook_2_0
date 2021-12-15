import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import logger from "redux-logger";
import contactReducer from "./contactReducer";

// export const store = createStore(reducer, applyMiddleware(logger));

export const store = configureStore({
  reducer: {
    phonebook: contactReducer,
    //   counter: counterReducer,
  },
  middleware: [logger],
  devTools: process.env.NODE_ENV === "development",
});
