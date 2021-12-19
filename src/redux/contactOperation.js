import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getContactsAPI,
  postContactAPI,
  deleteContactAPI,
} from "../api-service/api";

// const fetchBooks = () => async (dispatch) => {
//   dispatch(booksAction.fetchBookRequest());

//   try {
//     const books = await bookAPI.fetchBooks();
//     dispatch(booksAction.fetchBookSuccess(books));
//   } catch (error) {
//     ispatch(booksAction.fetchBookError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "phonebook/fetchContacts",
  async () => {
    const contacts = await getContactsAPI();
    console.log(contacts);
    return contacts;
  }
);

export const fetchContactsPOST = createAsyncThunk(
  "phonebook/fetchContactsPOST",
  async (contact) => {
    console.log(contact);
    const res = await postContactAPI(contact);
    console.log(res);
    return res.data;
  }
);
export const fetchContactsDELETE = createAsyncThunk(
  "phonebook/fetchContactsDELETE",
  async (contactId) => {
    const res = await deleteContactAPI(contactId);
    console.log(res);
    return res.data;
  }
);
