const BASE_URL = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "adrifther";

export const getAllContacts = async () => {
  const res = await fetch(`${BASE_URL}/agendas/${AGENDA_SLUG}`);
  if (!res.ok) throw new Error("Error fetching contacts");
  const data = await res.json();
  return data.contacts;
};

export const addContact = async contact => {
  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address,
  };
  const res = await fetch(
    `${BASE_URL}/agendas/${AGENDA_SLUG}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  if (!res.ok) throw new Error("Error adding contact");
  return await res.json();
};

export const updateContact = async (id, contact) => {
  const payload = {
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address,
  };
  const res = await fetch(
    `${BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  if (!res.ok) throw new Error("Error updating contact");
  return await res.json();
};

export const deleteContact = async id => {
  const res = await fetch(
    `${BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${id}`,
    { method: "DELETE" }
  );
  if (!res.ok) throw new Error("Error deleting contact");
  return true;
};
