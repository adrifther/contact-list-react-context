import React from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../services/contactService";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactCard = ({ contact }) => {
  const { dispatch } = useGlobalReducer();

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await deleteContact(contact.id);
      dispatch({ type: "delete_contact", payload: contact.id });
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">📞 {contact.phone}</p>
        <p className="card-text">📧 {contact.email}</p>
        <p className="card-text">📍 {contact.address}</p>
        <div className="d-flex justify-content-end">
          <Link to={`/contacts/edit/${contact.id}`}>
            <button className="btn btn-outline-primary btn-sm me-2">
              Edit
            </button>
          </Link>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
