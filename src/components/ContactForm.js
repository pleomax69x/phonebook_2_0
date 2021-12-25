import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContactsPOST } from "../redux/contactOperation";
import { getContacts } from "../redux/contactSelector";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChangeName = (e) => setName(e.currentTarget.value);
  const handleChangeNumber = (e) => setNumber(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert("Some field is empty");
      return;
    }

    const isUnicContact = !!contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }
    const newContact = {
      name,
      number,
      // createdAt: new Date().toISOString(),
    };
    dispatch(fetchContactsPOST(newContact));

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          autoComplete="off"
          placeholder="Enter Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          autoComplete="off"
          placeholder="Enter Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type={"submit"}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
