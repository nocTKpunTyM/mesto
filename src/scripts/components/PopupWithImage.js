import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (popupSelector, {sub, alt, src}) {
        super(popupSelector);
        this._title = sub;
        this._alt = alt;
        this._src = src;
    }

    generateCard() {
        this._element = super._getTemplate();
        this._elementImage = this._element.querySelector('.popup-img-big__image');
        this._element.querySelector('.popup-img-big__image-subline').textContent = this._title;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._src;
        return this._element; 
    }

    openPopup() {
        super.openPopup();
        this.generateCard();
    }
}