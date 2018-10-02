import Modal from './modal'
import Popup from './popup'
import Toast from './toast'

export default window.UI = {
  Popup: new Popup(),
  Modal: new Modal(),
  Toast: new Toast(),
}
