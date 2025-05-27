// src/services/contactService.js

const BASE_URL = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "adrifther"; // Puedes cambiar esto si necesitas otra agenda

// Obtener todos los contactos de la agenda
export const getAllContacts = async () => {
  const res = await fetch(`${BASE_URL}/agendas/${AGENDA_SLUG}/contacts`);
  if (!res.ok) throw new Error("Error fetching contacts");
  return await res.json();
};

// Crear un nuevo contacto en la agenda
// contactService.js

export const addContact = async (contact) => {
  const contactWithSlug = {
    ...contact,
    agenda_slug: AGENDA_SLUG  // 👈 Este campo es obligatorio
  };

  const res = await fetch(`${BASE_URL}/agendas/${AGENDA_SLUG}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactWithSlug),
  });

  if (!res.ok) throw new Error("Error adding contact");
  return await res.json();
};


// Actualizar un contacto existente en la agenda
export const updateContact = async (id, contact) => {
  const res = await fetch(`${BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  if (!res.ok) throw new Error("Error updating contact");
  return await res.json();
};

// Eliminar un contacto de la agenda
export const deleteContact = async (id) => {
  const res = await fetch(`${BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error deleting contact");
  return true;
};