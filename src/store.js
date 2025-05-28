export const initialStore = () => ({
  contacts: [],
  selectedContact: null,
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
    default:
      throw new Error("Unknown action type: " + action.type);
  }
}
