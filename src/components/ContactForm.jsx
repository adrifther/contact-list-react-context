// src/components/ContactForm.jsx
import React, { useState, useEffect } from "react";

const ContactForm = ({ initialData, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name:    initialData.name    || "",
        email:   initialData.email   || "",
        phone:   initialData.phone   || "",
        address: initialData.address || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
