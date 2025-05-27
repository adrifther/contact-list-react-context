// src/pages/ContactList.jsx
import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getAllContacts } from "../services/contactService";
import ContactCard from "../components/ContactCard";
import AddContactForm from "../components/AddContactForm";

const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contacts = await getAllContacts();
        dispatch({ type: "set_contacts", payload: contacts });
      } catch (err) {
        console.error("Error loading contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Contact List</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add a new contact
        </button>
      </div>

      <div className="row">
        {store.contacts?.map((contact) => (
          <div className="col-md-6 col-lg-4 mb-3" key={contact.id}>
            <ContactCard onOpen={() => setShowModal(true)} contact={contact} />
          </div>
        ))}
      </div>

      {showModal && <AddContactForm onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ContactList;
