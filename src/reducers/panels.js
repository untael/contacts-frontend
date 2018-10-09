let initialState = {
  showSearch: false,
  showDisplay: false,
  showEdit: false,
  showList: true,
  showLoader: true,
  contact: {},
}

const panels = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LIST':
      return {
        ...state,
        showList: action.showList,
        showSearch: action.showSearch,
        showDisplay: action.showDisplay,
        showEdit: action.showEdit,
        showLoader: action.showLoader,
      }
    case 'SHOW_SEARCH':
      return {
        ...state,
        showList: action.showList,
        showSearch: action.showSearch,
        showDisplay: action.showDisplay,
        showEdit: action.showEdit,
        showLoader: action.showLoader,
      }
    case 'SHOW_SEARCH':
      return {
        ...state,
        showList: action.showList,
        showSearch: action.showSearch,
        showDisplay: action.showDisplay,
        showEdit: action.showEdit,
        showLoader: action.showLoader,
      }
    case 'SHOW_DISPLAY':
      return {
        ...state,
        showList: action.showList,
        showSearch: action.showSearch,
        showDisplay: action.showDisplay,
        showEdit: action.showEdit,
        contact: action.contact,
        showLoader: action.showLoader,
      }
    case 'SHOW_EDIT':
      return {
        ...state,
        showList: action.showList,
        showSearch: action.showSearch,
        showDisplay: action.showDisplay,
        showEdit: action.showEdit,
        contact: action.contact,
        showLoader: action.showLoader,
      }
    case 'SAVE_CONTACT_DATA':
      return {
        ...state,
        contact: action.contact,
      }
    default:
      return state
  }
}

export default panels