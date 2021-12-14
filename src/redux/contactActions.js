import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction(
  "phonebook/addContact",
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
        // createdAt: new Date().toISOString(),
      },
    };
  }
);
export const deleteContact = createAction("phonebook/deleteContact");
export const changeFilter = createAction("phonebook/changeFilter");
