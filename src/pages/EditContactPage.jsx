import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import {
  updateContact,
  getAllContacts,
} from "../services/contactService";
import ContactForm from "../components/ContactForm";

const EditContactPage = () => {
  const { id } = useParams();
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const contact = store.contacts.find(c => c.id === parseInt(id));

  useEffect(() => {
    if (!contact) {
      (async () => {
        const updated = await getAllContacts();
        dispatch({ type: "set_contacts", payload: updated });
      })();
    }
  }, [contact, dispatch]);

  const handleUpdate = async form => {
    await updateContact(id, form);
    const updated = await getAllContacts();
    dispatch({ type: "set_contacts", payload: updated });
    navigate("/contacts");
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="container py-4">
      <h2>Edit Contact</h2>
      <ContactForm
        initialData={contact}
        onSubmit={handleUpdate}
        onCancel={() => navigate("/contacts")}
      />
    </div>
  );
};

export default EditContactPage;
