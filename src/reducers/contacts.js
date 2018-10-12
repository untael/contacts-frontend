let initialState = {
  contacts: [],
  contact: {},
  pageNumber: 1,
}

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.contacts,
        pageNumber: ++state.pageNumber,
      }
    case 'LOAD_CONTACTS_SUCCESS':
      if (action.contacts.length !== 0) {
        return {
          ...state,
          contacts: state.contacts.concat(action.contacts),
          pageNumber: ++state.pageNumber,
        }
      } else {
        return state
      }

    case 'SAVE_CONTACT_SUCCESS':
      return {
        state,
      }
    case 'DELETE_CONTACT_SUCCESS':
      return {
        ...state, contacts: state.contacts.filter(
          (contact) => contact._id !== action.id),
      }
    default:
      return state
  }
}

export default contacts
