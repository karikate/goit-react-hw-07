import { HiPhone, HiUser } from "react-icons/hi";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <HiUser /> {contact.name}
        </p>
        <p>
          <HiPhone /> {contact.number}
        </p>
      </div>

      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
