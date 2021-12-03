const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{" "}
            <button type={"button"} onClick={() => onDelete(id)}>
              Delete Contact
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

// {
//   visibleContacts.map(({ id, name, number }) => (
//     <li key={id}>
//       {name}: {number}
//       <button type="button" onClick={() => deleteContact(id)}>
//         Delete
//       </button>
//     </li>
//   ));
// }
