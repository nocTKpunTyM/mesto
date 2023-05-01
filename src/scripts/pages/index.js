import '../../styles/pages/index.css';
import {
    myId,
    options,
    placesListSelector,
    templateSelector,
    placeElements,

    buttonOpenAddPlace,
    addPlaceSelector,
    formAddPlace,
    formEditProfile,
    
    editProfileSelector,
    buttonOpenEditProfile,

    profileName,
    profileJob,
    inputName,
    inputJob,

    imageBigSelector,
    removeCardSelector,

    formEditAvatar,
    changeAvatarSelector,
    changeAvatarButton,
    avatarBlock,
    inputAvatar
} from '../utils/constants.js';

import FormValidator from '../components/Formvalidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
      authorization: '92dc896a-714f-46b7-abd9-c8be237b7915',
      'Content-Type': 'application/json'
    }
});

// Получаем информацию о пользователе
const userProfile = new UserInfo ({profileName, profileJob});
// Создаем модалку редактирования пользователя
const popupEditProfile = new PopupWithForm ({
    handleSubmit: (inputs) => {
        const inputName = inputs.name;
        const inputJob = inputs.job;
        let thisButton = popupEditProfile.thisButton();
        api.changeProfile(inputName, inputJob, userProfile, thisButton);
        popupEditProfile.close();
        }
    },
    options,
    editProfileSelector
);
popupEditProfile.setEventListeners();
// Создаем модалку редактирования аватарки
const popupChangeAvavtar = new PopupWithForm ({
    handleSubmit: (inputs) => {  
            const inputAvatar = inputs.avatar;
            let thisButton = popupChangeAvavtar.thisButton();
            api.changeAvatar(inputAvatar, avatarBlock, thisButton);
            popupChangeAvavtar.close();
        }
    },
    options,
    changeAvatarSelector
);
popupChangeAvavtar.setEventListeners();
// Откроем модалку редактирования аватарки
changeAvatarButton.addEventListener('click', ()  => {
const avatarUrl = window.getComputedStyle(avatarBlock).backgroundImage.slice(4, -1).replace(/"/g, ""); 
    inputAvatar.value = avatarUrl;
    popupChangeAvavtar.open();
});

// ОТКРЫТИЕ МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function openPopupEditProfile() {
    inputName.value = userProfile.getUserInfo().profileName;
    inputJob.value = userProfile.getUserInfo().profileJob;
    popupEditProfile.open();
}
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);
// Из АПИ в инпуты профиля
function putInProfile (result) {
    profileName.textContent = result.name;
    profileJob.textContent = result.about;
    avatarBlock.style.backgroundImage = 'url("' + result.avatar + '")';
}
api.getProfile(putInProfile);

/////// ПОЯВЛЕНИЕ КАРТОЧЕК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
const popupImage = new PopupWithImage (imageBigSelector);
// Создание пустой секции для карточек мест
const cardsList = new Section ({
    items: [],
    renderer: (cardItem) => {    
        const cardElement = createCard (cardItem).generateCard();
        cardsList.addItem(cardElement);
    }
  },
  placesListSelector
);
// Cоздание отдельной карточки
function createCard (place) {    
    const card = new Card({
        data: place,
        placeElements,
        handleImageBig: (imageData) => {
            popupImage.open (imageData);
        },
        handleRemoveCard: (place) => {
            document.querySelector('.form__input_type_cardId').value = place.id;
            popupRemovePlace.open();
        },
        handleLike: (card) => {
            if (card.myLike) {
                api.toDisLike (card, placeElements);
            }
            else {
                api.toLike (card, placeElements);
            }    
        }
    },
    templateSelector,
    myId
    );   
    return card;
}
// Запрос на получение карточек
const cardsPromise = new Promise (function (resolve, reject) {
    let cards = api.getPlaces();
    if (cards) {
        resolve(cards);
    } else {
        reject('Не пришли карты')
    }
});
// отрисовка карточек при загрузке страницы
cardsPromise
.then(function (value) {
    cardsList.renderItems(value);
})
.catch(function (value) {
    console.log(value);
});

// РАБОТА МОДАЛКИ ДОБАВЛЕНИЯ КАРТОЧКИ МЕСТА
const popupAddPlace = new PopupWithForm ({
    handleSubmit: (inputs) => {        
        savePopupAddPlace(inputs);
        }
    },
    options,
    addPlaceSelector
);
popupAddPlace.setEventListeners();
// Открытие модалки добавления места
buttonOpenAddPlace.addEventListener('click', ()  => {
    popupAddPlace.open();
});
// Добавление карточки из модалки
function savePopupAddPlace(inputs) {   
    const place = 
    {
    name: inputs.title,
    link: inputs.url
    };
    let thisButton = popupAddPlace.thisButton();
    const cardPromise = new Promise (function (resolve, reject) {
        let card = api.putPlace(place, thisButton);
        if (card) {
            resolve(card);
        } else {
            reject('Не сохранилась карточка')
        }
    });
    cardPromise
    .then(function (cardItem) {
        const cardElement = createCard (cardItem).generateCard();
        cardsList.prependItem(cardElement);
    })
    .catch(function (value) {
        console.log(value);
    });
    popupAddPlace.close();
    validationAddPlace.toggleButtonState();
}
// Удаление карточек
const popupRemovePlace = new PopupWithForm ({
    handleSubmit: (inputs) => {        
        let cardId = inputs.id;
        let thisButton = popupRemovePlace.thisButton();
        const deleteCard = new Promise (function (resolve, reject) {
            let card = api.delPlace(cardId, thisButton);
            if (card) {
                resolve(card);
            } else {
                reject('Не удалилась карточка')
            }
        });
        deleteCard
        .then(function (result) {
            console.log(result);
            const cardForDel = document.getElementById(cardId);
            cardForDel.remove();
        });
            popupRemovePlace.close();
        }
    },
    options,
    removeCardSelector
);
popupRemovePlace.setEventListeners();

// Назначаем валидацию всем формам
const validationProfile = new FormValidator(formEditProfile, options);
validationProfile.enableValidation();
const validationAddPlace = new FormValidator(formAddPlace, options);
validationAddPlace.enableValidation();
const validationEditAvatar = new FormValidator(formEditAvatar, options);
validationEditAvatar.enableValidation();