import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._element = super._getTemplate();
        this._elementImage = this._element.querySelector('.popup-img-big__image');
        this._elementImageSub = this._element.querySelector('.popup-img-big__image-subline');
    }

    _generateCard({sub, alt, src}) { 
        this._elementImageSub.textContent = sub;
        this._elementImage.alt = alt;
        this._elementImage.src = src;
        return this._element; 
    }

    open(imageData) {
        super.open();
        this._generateCard(imageData);
    }
}