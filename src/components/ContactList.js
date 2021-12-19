import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../redux/contactSelector";
import { deleteContact } from "../redux/contactActions";
import { fetchContactsDELETE } from "../redux/contactOperation";

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            {/* <button type={"button"} onClick={() => dispatch(deleteContact(id))}> */}
            <button
              type={"button"}
              onClick={() => dispatch(fetchContactsDELETE(id))}
            >
              Delete Contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
