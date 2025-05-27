// src/components/ContactCard.jsx
import React from "react";
import { deleteContact } from "../services/contactService";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactCard = ({ contact }) => {
  const { dispatch } = useGlobalReducer();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteContact(contact.id);
        dispatch({ type: "delete_contact", payload: contact.id });
      } catch (err) {
        console.error("Error deleting contact:", err);
      }
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text mb-1">
          <strong>📞 Phone:</strong> {contact.phone}
        </p>
        <p className="card-text mb-1">
          <strong>📧 Email:</strong> {contact.email}
        </p>
        <p className="card-text">
          <strong>📍 Address:</strong> {contact.address}
        </p>
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-primary btn-sm me-2">Edit</button>
          <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;