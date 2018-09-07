import Popup from './popup'
import UI from './index'

//create child class
export default function Toast () {
  Popup.apply(this, arguments)
}

Toast.type = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
}

//inheritance
Toast.prototype = Object.create(Popup.prototype)
Toast.prototype.constructor = Toast

Toast.prototype.create = function (style, message) {
  const id = Popup.prototype.getId()
  const template = Popup.prototype.getTemplate(id, Popup.type.TOAST, style, message)
  const popupDiv = document.querySelector('.right')
  popupDiv.innerHTML = popupDiv.innerHTML + template
  setTimeout(function () {
    UI.Popup.remove(id)
  }, 5000)
}
