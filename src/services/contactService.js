// src/services/contactService.js

const BASE_URL = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "adrifther"; // Cambia esto si necesitas otra agenda

// Obtener todos los contactos de la agenda
export const getAllContacts = async () => {
  const res = await fetch(`${BASE_URL}/agendas/${AGENDA_SLUG}/contacts`);
  if (!res.ok) throw new Error("Error fetching contacts");
  const data = await res.json();
  return data.contacts;  // Devolver solo el array
};

// Crear un nuevo contacto en la agenda
export const addContact = async (contact) => {
  // El endpoint ya incluye la agenda, no necesita agenda_slug en el body
  const newContact = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address
  };

  const res = await fetch(
    `${BASE_URL}/agendas/${AGENDA_SLUG}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    }
  );

  if (!res.ok) throw new Error("Error adding contact");
  return await res.json();
};

// Actualizar un contacto existente en la agenda
export const updateContact = async (id, contact) => {
  const updated = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address
  };

  const res = await fetch(
    `${BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    }
  );

  if (!res.ok) throw new Error("Error updating contact");
  return await res.json();
};

// Eliminar un contacto de la agenda
export const deleteContact = async (id) => {
  const res = await fetch(
    `${BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`,
    { method: "DELETE" }
  );

  if (!res.ok) throw new Error("Error deleting contact");
  return true;
};
