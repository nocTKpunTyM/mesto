import '../../styles/pages/index.css';
import {
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
    inputCardId,

    formEditAvatar,
    changeAvatarSelector,
    changeAvatarButton,
    avatarBlock
} from '../utils/constants.js';

import {renderLoading, urlForCSS} from '../utils/utils.js';

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
let myId = '';
//Ждем данные профиля и карточек, затем заполняем профиль и карточки на странице
Promise.all([api.getProfile(), api.getPlaces()])
  .then(([profile, places]) => {
    myId = profile._id;
    putInProfile(profile);
    cardsList.renderItems(places);
  })
  .catch(err => console.log(err));
// Подготавливаем карту пользователя
const userProfile = new UserInfo ({profileName, profileJob});
// Из АПИ в инпуты профиля
function putInProfile (profile) {
    profileName.textContent = profile.name;
    profileJob.textContent = profile.about;
    avatarBlock.style.backgroundImage = urlForCSS(profile.avatar);
}

// Создаем модалку редактирования пользователя
const popupEditProfile = new PopupWithForm ({
    handleSubmit: (inputs) => {
        const inputName = inputs.name;
        const inputJob = inputs.job;
        const thisButton = popupEditProfile.getSubmitButton();
        const standartText = thisButton.textContent;
        renderLoading (standartText, thisButton, true);
        api.changeProfile(inputName, inputJob)
        .then((result) => {
            userProfile.setUserInfo(result.name, result.about);
            popupEditProfile.close();
            return result;
        })
        .catch((err) => {
            console.log(err); 
        })
        .finally(() => {
            renderLoading (standartText, thisButton);
        });
        }
    },
    options,
    editProfileSelector
);
popupEditProfile.setEventListeners();
// Создаем модалку редактирования аватарки
const popupChangeAvatar = new PopupWithForm ({
    handleSubmit: (inputs) => {  
            const inputAvatar = inputs.avatar;
            const thisButton = popupChangeAvatar.getSubmitButton();
            const standartText = thisButton.textContent;
            renderLoading (standartText, thisButton, true);
            api.changeAvatar(inputAvatar)
            .then((result) => {
                avatarBlock.style.backgroundImage = urlForCSS(result.avatar);
                popupChangeAvatar.close();
                validationEditAvatar.toggleButtonState();
            })
            .catch((err) => {
                console.log(err); 
            })
            .finally(() => {
                renderLoading (standartText, thisButton);
            });       
        }
    },
    options,
    changeAvatarSelector
);
popupChangeAvatar.setEventListeners();
// Откроем модалку редактирования аватарки
changeAvatarButton.addEventListener('click', ()  => {
    popupChangeAvatar.open();
});

// ОТКРЫТИЕ МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function openPopupEditProfile() {
    inputName.value = userProfile.getUserInfo().profileName;
    inputJob.value = userProfile.getUserInfo().profileJob;
    popupEditProfile.open();
}
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);

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
            inputCardId.value = place.id;
            popupRemovePlace.open();
        },
        handleLike: (card) => {
            if (card.myLike) {
                api.toDisLike (card)
                .then(function (result) {
                    card.likeCount.textContent = result.likes.length;
                    card
                    .querySelector(placeElements.btnLikeSelector)
                    .classList
                    .remove(placeElements.btnLikeActiveSelector);
                    card.myLike = false;
                })
                .catch(function (value) {
                    console.log(value);
                });
            }
            else {
                api.toLike (card)
                .then(function (result) {
                    card.likeCount.textContent = result.likes.length;
                    card
                    .querySelector(placeElements.btnLikeSelector)
                    .classList
                    .add(placeElements.btnLikeActiveSelector);
                    card.myLike = true;
                })
                .catch(function (value) {
                    console.log(value);
                });
            }    
        }
    },
    templateSelector,
    myId
    );   
    return card;
}

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
    const thisButton = popupAddPlace.getSubmitButton();
    const standartText = thisButton.textContent;
    renderLoading (standartText, thisButton, true);
    api.putPlace(place)
    .then(function (cardItem) {
        const cardElement = createCard (cardItem).generateCard();
        cardsList.prependItem(cardElement);
        popupAddPlace.close();
        validationAddPlace.toggleButtonState();
    })
    .catch(function (value) {
        console.log(value);
    })
    .finally(() => {
        renderLoading (standartText, thisButton);
    }); 
}
// Удаление карточек
const popupRemovePlace = new PopupWithForm ({
    handleSubmit: (inputs) => {        
        const cardId = inputs.id;
        const thisButton = popupRemovePlace.getSubmitButton();
        const standartText = thisButton.textContent;
        renderLoading (standartText, thisButton, true);
        api.delPlace(cardId)
        .then(function (result) {
            console.log(result);
            const cardForDel = document.getElementById(cardId);
            cardForDel.remove();
            popupRemovePlace.close();
        })
        .catch((value) => {
            console.log(value);
        })
        .finally(() => {
            renderLoading (standartText, thisButton);
        }); 
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