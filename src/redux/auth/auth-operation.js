import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("users/signup", credentials);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const login = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisToken = state.auth.token;
    if (persisToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persisToken);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {}
  }
);

const authOperation = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default authOperation;
