// src/store.js

export const initialStore = () => ({
  contacts: [],            // Lista de contactos obtenidos de la API
  selectedContact: null,   // Contacto seleccionado para edición (opcional)
});

export default function storeReducer(state, action = {}) {
  switch (action.type) {
    case "set_contacts":
      return { ...state, contacts: action.payload };

    case "add_contact":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "delete_contact":
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload),
      };

    case "update_contact":
      return {
        ...state,
        contacts: state.contacts.map(c =>
          c.id === action.payload.id ? action.payload : c
        ),
      };

    case "select_contact":
      return { ...state, selectedContact: action.payload };

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}
