import {placeElements} from './data.js';
const popupImgBig = document.querySelector('.popup-img-big');
const imageBig = document.querySelector('.popup-img-big__image');
const imageBigSub = document.querySelector('.popup-img-big__image-subline');

export default class Card {
    constructor (data, templateSelector, openPopup) {
        this._templateSelector = templateSelector;
        this._title = data.name;
        this._alt = data.name;
        this._src = data.link;
        this._openPopup = openPopup;
    }

    _getTemplate() {
        const cardDom = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.place')
          .cloneNode(true);
    
        return cardDom;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(placeElements.titleSelector).textContent = this._title;
        this._element.querySelector(placeElements.imageSelector).alt = this._title;
        this._element.querySelector(placeElements.imageSelector).src = this._src;
        
        return this._element; 
    }

    _hadleLike(evt) {
        evt.target.classList.toggle(placeElements.btnLikeActiveSelector);
    }

    _hadleTrash(elem) {
        elem.remove();
    }

    _setEventListeners() {
        this._element.querySelector(placeElements.btnLikeSelector).addEventListener('click', this._hadleLike);
        this._element.querySelector(placeElements.btnTrashSelector).addEventListener('click', () => {
            this._hadleTrash (this._element);
        });
        this._element.querySelector(placeElements.imageSelector).addEventListener('click', () => {
            imageBig.src = this._src;
            imageBig.alt = this._title;
            imageBigSub.textContent = this._title;
            this._openPopup(popupImgBig);
        });
    }
}