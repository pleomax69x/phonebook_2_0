import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./contactActions";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contacts = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case actionTypes.Inrement:
//       return state + payload;

//     case actionTypes.Decrement:
//       return state - payload;

//     default:
//       break;
//   }
// };
// const stepReducer = (state = 5, action) => state;

// export default combineReducers({
//     value: valueReducer,
//     step: stepReducer
// });
