export default class Card {
    constructor ({data, placeElements, handleImageBig}, templateSelector) {
        this._templateSelector = templateSelector;
        this._title = data.name;
        this._alt = data.name;
        this._src = data.link;
        this._handleImageBig = handleImageBig;
        this.placeElements = placeElements;
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
        this._elementImage = this._element.querySelector(this.placeElements.imageSelector);
        this._element.querySelector(this.placeElements.titleSelector).textContent = this._title;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._src;
        this._setEventListeners();
        return this._element; 
    }

    _handleLike(evt) {
        evt.target.classList.toggle('button__like_active');
    }

    _handleTrash(elem) {
        elem.remove();
    }

    _setEventListeners() {
        this._element.querySelector(this.placeElements.btnLikeSelector).addEventListener('click', this._handleLike);
        this._element.querySelector(this.placeElements.btnTrashSelector).addEventListener('click', () => {
            this._handleTrash (this._element);
        });
        this._elementImage.addEventListener('click', () => {
            const imageData = {
                src: this._src,
                alt: this._title,
                sub: this._title
            }
            this._handleImageBig(imageData);
        });
    }
}