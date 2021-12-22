import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import contactReducer from "./contactReducer";
import authReducer from "./auth/auth-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = createStore(reducer, applyMiddleware(logger));
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    phonebook: contactReducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  // middleware: [thunk, logger],
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
