import axios from 'axios'

export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_SEARCH = 'SHOW_SEARCH'
export const SHOW_DISPLAY = 'SHOW_DISPLAY'
export const SHOW_EDIT = 'SHOW_EDIT'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS'
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS'

export function getContacts () {
  return function (dispatch) {
    return axios.post('http://localhost:3000/list')
      .then(res => {
        const contacts = res.data
        dispatch({
          type: GET_CONTACTS_SUCCESS,
          contacts: contacts,
        })
      })
  }
}

export function saveContact (contact) {
  console.log('contact', contact)
  return function (dispatch) {
    return axios.post('http://localhost:3000/create', { contact })
      .then(res => {
        dispatch({
          type: SAVE_CONTACT_SUCCESS,
        })
      })
  }
}

export function deleteContact (contactId) {
  return function (dispatch) {
    return axios.post('http://localhost:3000/delete', { contactId })
      .then(res => {
        dispatch({
          type: DELETE_CONTACT_SUCCESS,
          id: contactId,
        })
      })
  }
}

export function showList () {
  return {
    type: SHOW_LIST,
    showList: true,
    showSearch: false,
    showDisplay: false,
    showEdit: false,
  }
}

export function showSearch () {
  return {
    type: SHOW_SEARCH,
    showList: false,
    showSearch: true,
    showDisplay: false,
    showEdit: false,
  }
}

export function showDisplay (contact) {
  return {
    type: SHOW_DISPLAY,
    showList: false,
    showSearch: false,
    showDisplay: true,
    showEdit: false,
    contact: contact,
  }
}

export function showEdit (contact) {
  return {
    type: SHOW_EDIT,
    showList: false,
    showSearch: false,
    showDisplay: false,
    showEdit: true,
    contact: contact,
  }
}

