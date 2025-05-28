// src/pages/AddContactPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, getAllContacts } from "../services/contactService";
import ContactForm from "../components/ContactForm";

const AddContactPage = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleAdd = async (form) => {
    try {
      await addContact(form);
      const updated = await getAllContacts();
      dispatch({ type: "set_contacts", payload: updated });
      navigate("/");
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  return (
    <div className="container py-4">
      <h2>Add New Contact</h2>
      <ContactForm onSubmit={handleAdd} onCancel={() => navigate("/")} />
    </div>
  );
};

export default AddContactPage;