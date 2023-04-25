export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = this._getTemplate();
        this._buttonToClose = this._popup.querySelector('.button_close');
    }

    _getTemplate() {
        const popupElement = document.querySelector(this._popupSelector);
        return popupElement;
    }

    openPopup () { 
        this._popup.classList.add('popup_opened');
        this._setEventListeners ();
    }

    closePopup () {        
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose (evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    _setEventListeners () {
       document.addEventListener('keydown', this._handleEscClose.bind(this));
       this._buttonToClose.addEventListener('click', this.closePopup.bind(this));

       this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')){
                this.closePopup();
            }
        });
    }
}