export const SHOW_DEFAULT = 'SHOW_DEFAULT'
export const SHOW_DISPLAY = 'SHOW_DISPLAY'
export const CONTACTS_TO_GLOBAL_STORE = 'CONTACTS_TO_GLOBAL_STORE'

export function contactsToGlobalStore (text) {
  return { type: CONTACTS_TO_GLOBAL_STORE, text }
}
export function showDefault (text) {
  return { type: SHOW_DEFAULT, text }
}

export function showDisplay (text) {
  return { type: SHOW_DISPLAY, text }
}

