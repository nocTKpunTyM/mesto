import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor ({handleSubmit}, options, popupSelector) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector(options.formSelector);
        this._subButton = this._form.querySelector('.button');
        this._inputList = Array.from(this._form.querySelectorAll(options.inputSelector));    
    }

    _getInputValues () {
        const inputs = {};
        this._inputList.forEach((inputElement) => {
            inputs[inputElement.name] = inputElement.value;
        });
        return inputs;
    }

    close () {      
        super.close();
        this._form.reset();          
    }

    getSubmitButton () {     
        return this._subButton;
    }

    setEventListeners () {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    }
}