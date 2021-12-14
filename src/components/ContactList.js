import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactActions";

const ContactList = ({ visibleContacts, onDelete }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{" "}
            {/* <button type={"button"} onClick={() => onDelete(id)}> */}
            <button type={"button"} onClick={() => dispatch(addContact(id))}>
              Delete Contact
            </button>
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
