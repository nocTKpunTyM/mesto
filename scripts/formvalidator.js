export default class FormValidator {
    constructor (formElement, options) {
        this._options = options;
        this._formElement = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
        this._buttonElement = formElement.querySelector(options.submitSelector);
    }

    _showInputError (inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._options.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._options.spanActiveClass);
    }
        
    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._options.inputErrorClass);
        errorElement.classList.remove(this._options.spanActiveClass);
        errorElement.textContent = '';
    }
      
    _hasInvalidInput () {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        })
    }

    _isValid (inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    toggleButtonState () {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._options.disabledButtonClass);
            this._buttonElement.setAttribute('disabled', 'true');
        } else {
            this._buttonElement.classList.remove(this._options.disabledButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    }

    _setEventListeners () {
        this.toggleButtonState();;
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        });
    }

    enableValidation () {       
        this._setEventListeners ();
    }
};