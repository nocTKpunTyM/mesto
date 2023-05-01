export default class Api {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

/////////////////////// ЗАПРОС ДАННЫХ ПРОФИЛЯ //////////////////
    getProfile (putInProfile) {
        this.urlGet = this.baseUrl + '/users/me';
        fetch(this.urlGet, {
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            putInProfile(result);
        })
        .catch((err) => {
            console.log(err); // "Что-то пошло не так: ..."
        });
    }

//----------------------- Изменение профиля ---------------//
    changeProfile (inputName, inputJob, userProfile, thisButton) {
        this.urlGet = this.baseUrl + '/users/me';
        thisButton.textContent = 'Сохранение...';
        fetch(this.urlGet, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: inputName,
                about: inputJob
            })
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            userProfile.setUserInfo(result.name, result.about);
            return result;
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            thisButton.textContent = 'Сохранить';
        });
    }

//----------------------- Изменение аватарки ---------------//
    changeAvatar (inputAvatar, avatarBlock, thisButton) {        
        this.urlGet = this.baseUrl + '/users/me/avatar';
        thisButton.textContent = 'Сохранение...';
        fetch(this.urlGet, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: inputAvatar
            })
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            avatarBlock.style.backgroundImage = 'url("' + result.avatar + '")';
            return result;
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            thisButton.textContent = 'Изменить';
        });
    }

/////////////////////// ЗАПРОС КАРТОЧЕК //////////////////
    getPlaces () {      
        this.urlGet = this.baseUrl + '/cards';
        return fetch(this.urlGet, {
            headers: this.headers
        })
        .then((res) => {
              return res.json();
        }); 
    } 

//----------------------- Добавление нового места -----------//
    putPlace (place, thisButton) {
        this.urlGet = this.baseUrl + '/cards';
        thisButton.textContent = 'Сохранение...';
        return fetch(this.urlGet, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: place.name,
                link: place.link
            })
        })
        .then((res) => {
            return res.json();
        });
    } 

//----------------------- Удаление карточки места -----------//
    delPlace (cardId, thisButton) {
        this.urlGet = this.baseUrl + '/cards/' + cardId;
        thisButton.textContent = 'Удаление...';
        return fetch(this.urlGet, {
            method: 'DELETE',
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .finally(() => {
            thisButton.textContent = 'Да';
        });
    } 

////////////////// ИЗМЕНИТЬ КОЛИЧЕСТВО ЛАЙКОВ ///////////////////
//------------------------Поставить лайк-----------------------//
    toLike (card, placeElements) {       
        this.urlGet = this.baseUrl + '/cards/' + card.id + '/likes';
        fetch(this.urlGet, {
            method: 'PUT',
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            card.likeCount.textContent = result.likes.length;
            return result;
        })
        .then((result) => {
        card
        .querySelector(placeElements.btnLikeSelector)
        .classList
        .add('button__like_active');
        
        card.myLike = true;
            return result;
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            console.log('like');
        });
    }

//------------------------Убрать лайк-----------------------//
    toDisLike (card, placeElements) {       
        this.urlGet = this.baseUrl + '/cards/' + card.id + '/likes';
        fetch(this.urlGet, {
            method: 'DELETE',
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then((result) => {
            card.likeCount.textContent = result.likes.length;
            return result;
        })
        .then((result) => {
        card
        .querySelector(placeElements.btnLikeSelector)
        .classList
        .remove('button__like_active');

        card.myLike = false;
            return result;
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            console.log('Dislike');
        });
    }
} 