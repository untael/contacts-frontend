import axios from 'axios'

export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_SEARCH = 'SHOW_SEARCH'
export const SHOW_DISPLAY = 'SHOW_DISPLAY'
export const SHOW_EDIT = 'SHOW_EDIT'
export const SHOW_CREATE = 'SHOW_CREATE'
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
export const SAVE_CONTACT_SUCCESS = 'SAVE_CONTACT_SUCCESS'
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS'
export const SAVE_CONTACT_DATA = 'SAVE_CONTACT_DATA'
export const LOAD_CONTACTS_SUCCESS = 'LOAD_CONTACTS_SUCCESS'

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

export function loadContacts (pageNumber) {
  return function (dispatch) {
    return axios.post('http://localhost:3000/list', { pageNumber })
      .then(res => {
        const contacts = res.data
        dispatch({
          type: LOAD_CONTACTS_SUCCESS,
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

export function deleteContact (id) {
  return function (dispatch) {
    return axios.post('http://localhost:3000/delete', { id })
      .then(res => {
        dispatch({
          type: DELETE_CONTACT_SUCCESS,
          id: id,
        })
      })
  }
}

export function showList () {
  return function (dispatch) {
    return axios.post('http://localhost:3000/list')
      .then(res => {
        const contacts = res.data
        dispatch({
          type: GET_CONTACTS_SUCCESS,
          contacts: contacts,
        })
        dispatch({
          type: SHOW_LIST,
          showList: true,
          showSearch: false,
          showDisplay: false,
          showEdit: false,
          showLoader: true,
        })
      })
  }
}

export function showSearch () {
  return {
    type: SHOW_SEARCH,
    showList: false,
    showSearch: true,
    showDisplay: false,
    showEdit: false,
    showLoader: false,

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
    showLoader: false,
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
    showLoader: false,
  }
}

export function showCreate () {
  return {
    type: SHOW_CREATE,
    showList: false,
    showSearch: false,
    showDisplay: false,
    showEdit: true,
    contact: {},
    showLoader: false,
  }
}

export function saveContactData (contact) {
  return {
    type: SAVE_CONTACT_DATA,
    contact: contact,
  }
}

export function saveContactPhones (data) {
  return {
    type: SAVE_CONTACT_DATA,
    contact: data,
  }
}


