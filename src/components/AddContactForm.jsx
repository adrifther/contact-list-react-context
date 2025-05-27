// src/components/AddContactForm.jsx
import React, { useEffect, useState } from "react";
import { addContact, getAllContacts } from "../services/contactService";
import useGlobalReducer from "../hooks/useGlobalReducer";

const AddContactForm = ({ onClose }) => {
  const { store, dispatch } = useGlobalReducer();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });
  useEffect(()=>{
   if(store.selectedContact != null){
    setForm({ 
    name: store.selectedContact.name,
    phone: store.selectedContact.phone,
    email: store.selectedContact.email,
    address: store.selectedContact.address
  }
  );
   }
  },[]);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1) Creas el contacto
      await addContact(form);

      // 2) Recargas toda la lista desde la API
      const refreshed = await getAllContacts();

      // 3) Actualizas el global store
      dispatch({ type: "set_contacts", payload: refreshed });

      // 4) Cierras el modal
      onClose();
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Add New Contact</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            {["name","phone","email","address"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label">
                  {field === "name" ? "Full Name" : field.charAt(0).toUpperCase()+field.slice(1)}
                </label>
                <input
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  type={field==="email"?"email":"text"}
                  className="form-control"
                  required
                />
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;
