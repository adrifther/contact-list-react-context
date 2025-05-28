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
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        address: initialData.address || "",
      });
    }
  }, [initialData]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {["name", "email", "phone", "address"].map(field => (
        <div className="mb-3" key={field}>
          <label className="form-label">
            {field === "name"
              ? "Full Name"
              : field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            name={field}
            type={field === "email" ? "email" : "text"}
            value={form[field]}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      ))}
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary me-2"
          onClick={onCancel}
        >
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
