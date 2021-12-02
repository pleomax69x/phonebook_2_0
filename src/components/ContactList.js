const ContactList = (contacts) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>{name} </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
