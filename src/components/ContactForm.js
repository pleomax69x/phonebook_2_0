import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { nanoid } from "nanoid";

// model.id = nanoid()

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => setName(e.currentTarget.value);
  const handleChangeNumber = (e) => setNumber(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) {
      alert("Some field is empty");
      return;
    }

    onSubmit(name, number);

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
