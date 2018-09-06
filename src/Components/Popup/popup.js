//POPUP PARENT
// create parent class
function Popup () {
}

Popup.type = {
  TOAST: 'toast',
  MODAL: 'modal',
}
// methods in prototype
Popup.prototype.getId = function () {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 3; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text
}

Popup.prototype.getTemplate = function (id, type, style, message) {
  return '<div id="' + id + '" class="' + type + ' ' + style + '">' + '<div class="' + type + '-content">' + '<img class="img" src="icons/' + style + '.png">'
    + '<div class="text">'+ message + '</div>' + '<span class="close" onClick="UI.Popup.remove(\'' + id + '\')">x</span>' + '</div>' + '</div>'
}

Popup.prototype.remove = function (id) {
  let element = document.getElementById(id)
  element.parentNode.removeChild(element)
}


