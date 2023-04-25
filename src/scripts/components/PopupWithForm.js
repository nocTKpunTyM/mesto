import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({handleSubmit}, options, popupSelector) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector(options.formSelector);
        this._inputList = Array.from(this._form.querySelectorAll(options.inputSelector));     
    }

    _getInputValues () {
        this._inputList.forEach((inputElement) => {
            inputElement.value = '';
        });
    }

    closePopup () {        
        super.closePopup();
        this._getInputValues ();      
    }

    _setEventListeners () {
        super._setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
     }
}