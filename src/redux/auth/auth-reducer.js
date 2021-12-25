import { createReducer } from "@reduxjs/toolkit";
import authOperation from "./auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  loading: false,
};

const authReducer = createReducer(initialState, {
  [authOperation.register.fulfilled]: (state, { payload }) => ({
    user: payload.user,
    token: payload.token,
    isLogged: true,
    loading: false,
  }),
  [authOperation.login.fulfilled]: (state, { payload }) => ({
    user: payload.user,
    token: payload.token,
    isLogged: true,
    loading: false,
  }),
  [authOperation.logout.fulfilled]: (state, action) => initialState,
  [authOperation.fetchCurrentUser.fulfilled]: (state, { payload }) => ({
    user: payload,
    token: state.token,
    isLogged: true,
    loading: false,
  }),
  [authOperation.fetchCurrentUser.pending]: (state) => ({
    ...state,
    loading: true,
  }),
  [authOperation.fetchCurrentUser.rejected]: (state) => ({
    ...state,
    loading: false,
  }),
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
