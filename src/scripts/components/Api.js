export default class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _getStatus (res) {
        if (res.ok) {
            return res.json();
          }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

/////////////////////// ЗАПРОС ДАННЫХ ПРОФИЛЯ //////////////////
    getProfile () {
        this.urlGet = this.baseUrl + '/users/me';
        return fetch(this.urlGet, {
            headers: this.headers
        })
        .then((res) => {
            return this._getStatus (res);
        }) 
    }

//----------------------- Изменение профиля ---------------//
    changeProfile (inputName, inputJob) {
        this.urlGet = this.baseUrl + '/users/me';
        return fetch(this.urlGet, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: inputName,
                about: inputJob
            })
        })
        .then((res) => {
            return this._getStatus (res);
        })
    }

//----------------------- Изменение аватарки ---------------//
    changeAvatar (inputAvatar) {        
        this.urlGet = this.baseUrl + '/users/me/avatar';
        return fetch(this.urlGet, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: inputAvatar
            })
        })
        .then((res) => {
            return this._getStatus (res);
        })   
    }

/////////////////////// ЗАПРОС КАРТОЧЕК //////////////////
    getPlaces () {      
        this.urlGet = this.baseUrl + '/cards';
        return fetch(this.urlGet, {
            headers: this.headers
        })
        .then((res) => {
            return this._getStatus (res);
        }); 
    } 

//----------------------- Добавление нового места -----------//
    putPlace (place) {
        this.urlGet = this.baseUrl + '/cards';
        return fetch(this.urlGet, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: place.name,
                link: place.link
            })
        })
        .then((res) => {
            return this._getStatus (res);
        });
    } 

//----------------------- Удаление карточки места -----------//
    delPlace (cardId) {
        this.urlGet = this.baseUrl + '/cards/' + cardId;
        return fetch(this.urlGet, {
            method: 'DELETE',
            headers: this.headers
        })
        .then((res) => {
            return this._getStatus (res);
        });
    } 

////////////////// ИЗМЕНИТЬ КОЛИЧЕСТВО ЛАЙКОВ ///////////////////
//------------------------Поставить лайк-----------------------//
    toLike (card) {       
        this.urlGet = this.baseUrl + '/cards/' + card.id + '/likes';
        return fetch(this.urlGet, {
            method: 'PUT',
            headers: this.headers
        })
        .then((res) => {
            return this._getStatus (res);
        })
        .then((result) => {
            return result;
        });
    }

//------------------------Убрать лайк-----------------------//
    toDisLike (card) {       
        this.urlGet = this.baseUrl + '/cards/' + card.id + '/likes';
        return fetch(this.urlGet, {
            method: 'DELETE',
            headers: this.headers
        })
        .then((res) => {
            return this._getStatus (res);
        })
        .then((result) => {
            return result;
        });
    }
} 