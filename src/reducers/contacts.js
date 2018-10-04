let initialState = {
  requestSent: false,
  showSearch: false,
  showDisplay: false,
  showEdit: false,
  showList: true,
  showLoader: true,
  contact: {},
  contacts: [],
  pageNumber: 1,
}

const contactPanels = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DEFAULT':
      return {
        state,
      }
    case 'SHOW_DISPLAY':
      return {
        ...state,
        showDisplay: true,
        showList: false,
        showLoader: false,
      }
    default:
      return state
  }
}
const contactsList = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS_TO_GLOBAL_STORE':
      return {
        ...state
      }
    default:
      return state
  }
}

console.log(contactPanels)
export default contactPanels