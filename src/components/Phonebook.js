import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "../redux/contactActions";

// const inititalName = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const Phonebook = () => {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const handleFilter = (e) => setFilter(e.currentTarget.value);

  const handleFormSubmit = (name, number) => {
    const isUnicContact = !!contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }
    dispatch(addContact(name, number));
    // const newContact = {
    //   id: nanoid(),
    //   name: name,
    //   number: number,
    // };
    // setContacts([...contacts, newContact]);
  };
  // const getVisibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const getVisibleContacts = contacts;

  const deleteContact = (contactId) => {
    const deleteCon = contacts.filter((contact) => contact.id !== contactId);
    // setContacts([...deleteCon]);
  };

  useEffect(() => {
    const webContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(webContacts);
    if (parsedContacts) {
      // setContacts([...parsedContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList
        visibleContacts={getVisibleContacts}
        onDelete={deleteContact}
      />
    </div>
  );
};

export default Phonebook;
