import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
// import { nanoid } from "nanoid";

// model.id = nanoid()

const inititalName = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const Phonebook = () => {
  const [contacts, setContacts] = useState(inititalName);
  const [filter, setFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter contacts={contacts} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Phonebook;
