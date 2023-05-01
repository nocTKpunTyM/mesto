export default class Card {
    constructor ({data, placeElements, handleImageBig, handleRemoveCard, handleLike}, templateSelector, myId) {
        this._myId = myId;
        this._templateSelector = templateSelector;
        this._title = data.name;
        this._alt = data.name;
        this._src = data.link;
        this._handleImageBig = handleImageBig;
        this._handleRemoveCard = handleRemoveCard;
        this.placeElements = placeElements;
        this._likes = data.likes;
        this._id = data._id;
        this.handleLike = handleLike;
        this.ownerId = data.owner._id;
    }

    _getTemplate() {
        const cardDom = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.place')
          .cloneNode(true);
        return cardDom;
    }

    _isLikeActive() {      
        this._likes.forEach((like) => {
            if (like._id == this._myId) {
                this._element
                .querySelector(this.placeElements.btnLikeSelector)
                .classList.add('button__like_active');
                this._element.myLike = true;
            }    
        });
    }

    _isMyCard() {
        const delButton = this._element.querySelector(this.placeElements.btnTrashSelector);  
            if (this.ownerId != this._myId) {
                delButton.remove();
            }
            else {
                delButton.addEventListener('click', () => {
                    this._handleRemoveCard (this._element);
                });
            }   
    }
  
    generateCard() {
        this._element = this._getTemplate();
        this._element.id = this._id;
        this._isLikeActive();
        this._isMyCard();
        this._elementImage = this._element.querySelector(this.placeElements.imageSelector);
        this._element.querySelector(this.placeElements.titleSelector).textContent = this._title;
        this._element.likeCount = this._element.querySelector(this.placeElements.likeCount);
        this._element.likeCount.textContent = this._likes.length;
        this._elementImage.alt = this._title;
        this._elementImage.src = this._src;
        this._setEventListeners();
        return this._element; 
    }

    _setEventListeners() {
        this._element.querySelector(this.placeElements.btnLikeSelector).addEventListener('click', () => {
            this.handleLike (this._element);
        } 
        );
        
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