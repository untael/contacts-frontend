const PopupTypes = {
  error: 'toast-error',
  warning: 'toast-warning',
  info: 'toast-info',
  success: 'toast-success',
  modal: 'modal',
}
//POPUP PARENT
// create parent class
function Popup (div) {
  this.div = document.querySelector(div)
}

// methods in prototype
Popup.prototype.show = function () {
  // console.log(this.div)
  this.div.classList.toggle('show')
}
Popup.prototype.hide = function () {
  // console.log(this.div)
  this.div.classList.remove('show')
}

//TOAST
//create child class
function Toast (div) {
  Popup.apply(this, arguments)
}

//inheritance
Toast.prototype = Object.create(Popup.prototype)
Toast.prototype.constructor = Toast

Toast.prototype.show = function () {
  Popup.prototype.show.apply(this)
  if (this.div === PopupTypes.error) {
    this.div.classList.toggle(PopupTypes.error)
  } else {
    if (this.div === PopupTypes.warning) {
      this.div.classList.toggle(PopupTypes.warning)
    } else {
      if (this.div === PopupTypes.info) {
        this.div.classList.toggle(PopupTypes.info)
      } else {
        if (this.div === PopupTypes.success) {
          this.div.classList.toggle(PopupTypes.success)
        }
      }
    }
  }
}

function showToast (div) {
  const toast = new Toast(div)
  toast.show()
  setTimeout(function () {
    toast.hide()
  }, 5000)
}

function hideToast (div) {
  const toast = new Toast(div)
  toast.hide()
}

//MODAL
//create child class
function Modal (div) {
  Popup.apply(this, arguments)
}

//inheritance
Modal.prototype = Object.create(Popup.prototype)
Modal.prototype.constructor = Modal

Modal.prototype.show = function () {
  Popup.prototype.show.apply(this)
  if (this.div === PopupTypes.modal) {
    this.div.classList.toggle(PopupTypes.modal)
  }
}

Modal.prototype.hide = function () {

  this.div.classList.remove('show')
}

function showModal (div) {
  const modal = new Modal(div)
  modal.show()
}

function hideModal (div) {
  const modal = new Modal(div)
  modal.hide()
}

window.onclick = function (event) {
  const modal = document.querySelector('.modal')
  if (event.target === modal) {
    modal.classList.remove('show')
  }
}


