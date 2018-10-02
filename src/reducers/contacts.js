let initalState: {
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


const contactPanels = (state = initalState, action) => {
  switch (action.type) {
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
export default contactPanels