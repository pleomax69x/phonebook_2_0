import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { useDispatch } from "react-redux";
// import { addContactLocal } from "../redux/contactActions";
// import { getContacts } from "../redux/contactSelector";
import { fetchContacts } from "../redux/contactOperation";

const Phonebook = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);

  useEffect(() => {
    // const webContacts = localStorage.getItem("contacts");
    // const parsedContacts = JSON.parse(webContacts);
    // if (parsedContacts) {
    //   dispatch(addContactLocal(parsedContacts));
    // }
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
