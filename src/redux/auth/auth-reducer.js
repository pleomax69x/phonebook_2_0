import { combineReducers, createReducer, createSlice } from "@reduxjs/toolkit";
import authOperation from "./auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
};

const authReducer = createReducer(initialState, {
  [authOperation.register.fulfilled]: (state, { payload }) => ({
    user: payload.user,
    token: payload.token,
    isLogged: true,
  }),
  [authOperation.login.fulfilled]: (state, { payload }) => ({
    user: payload.user,
    token: payload.token,
    isLogged: true,
  }),
  [authOperation.logout.fulfilled]: (state, action) => initialState,
});

// const authReducer = createReducer(initialState, {
//   [authOperation.register.fulfilled]: (state, { payload }) => ({
//     ...payload,
//     isLogged: true,
//   }),
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [authOperation.register.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLogged = true;
//     },
//   },
// });

export default authReducer;

// export default authSlice.reducer;
