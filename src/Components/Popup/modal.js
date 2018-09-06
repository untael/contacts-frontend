//MODAL
//create child class
function Modal () {
  Popup.apply(this, arguments)
}

Modal.type = {
  MODAL: 'modal',
}
//inheritance
Modal.prototype = Object.create(Popup.prototype)
Modal.prototype.constructor = Modal

Modal.prototype.create = function (style, message) {
  const id = Popup.prototype.getId()
  const template = Popup.prototype.getTemplate(id, Popup.type.MODAL, style, message)
  const popupDiv = document.querySelector('.body')
  popupDiv.innerHTML = popupDiv.innerHTML + template
}

window.onclick = function (event) {
  if (document.querySelector('.modal')) {
    let modalId = document.getElementsByClassName('modal')[0].id
    let modal = document.getElementById(modalId)
    if (event.target == modal) {
      modal.parentNode.removeChild(modal)
    }
  }
}
