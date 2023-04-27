export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = this._getTemplate();
        this._buttonToClose = this._popup.querySelector('.button_close');
        this._bindebleHandleEscClose = this._handleEscClose.bind(this);
        this._bindebleClose = this.close.bind(this);
        this._bindebleHandleMouseClose = this._handleMouseClose.bind(this);
    }

    _getTemplate() {
        const popupElement = document.querySelector(this._popupSelector);
        return popupElement;
    }

    open () { 
        this._popup.classList.add('popup_opened');
        this._setEventListeners ();
    }

    close () {       
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleMouseClose (evt) {
        if (evt.target.classList.contains('popup')){
            this.close();
        }
    }
    
    _setEventListeners () {
       document.addEventListener('keydown', this._bindebleHandleEscClose);
       this._buttonToClose.addEventListener('click', this._bindebleClose);
       this._popup.addEventListener('mousedown', this._bindebleHandleMouseClose);
    }

    _removeEventListeners () {
        document.removeEventListener('keydown', this._bindebleHandleEscClose);
        this._buttonToClose.removeEventListener('click', this._bindebleClose);
        this._popup.removeEventListener('mousedown', this._bindebleHandleMouseClose);
    }
}