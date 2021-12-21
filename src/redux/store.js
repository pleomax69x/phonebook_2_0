import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import contactReducer from "./contactReducer";
import authReducer from "./auth/auth-reducer";

// export const store = createStore(reducer, applyMiddleware(logger));

export const store = configureStore({
  reducer: {
    phonebook: contactReducer,
    //   counter: counterReducer,
    auth: authReducer,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV === "development",
});
