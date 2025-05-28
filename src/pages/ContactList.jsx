import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getAllContacts } from "../services/contactService";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    (async () => {
      const contacts = await getAllContacts();
      dispatch({ type: "set_contacts", payload: contacts });
    })();
  }, [dispatch]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Contact List</h1>
        <Link to="/contacts/add">
          <button className="btn btn-primary">Add a new contact</button>
        </Link>
      </div>
      <div className="row">
        {store.contacts.map(contact => (
          <div className="col-md-6 col-lg-4 mb-3" key={contact.id}>
            <ContactCard contact={contact} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
