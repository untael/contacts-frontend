import { combineReducers } from 'redux'
import contacts from './contacts'
import panels from './panels'

export default combineReducers({
  contacts,
  panels,
})