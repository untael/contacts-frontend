let initialState = {
  contacts: [],
  contact: {},
}

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACTS_SUCCESS':
      return {
        ...state, contacts: action.contacts,
      }

    case 'SAVE_CONTACT_SUCCESS':
      return state
    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state, contacts: state.contacts.filter(
          (contact) => contact.id !== action.id),
      }
    default:
      return state
  }
}

export default contacts
