import {places} from './data.js';
import {options} from './data.js';
import FormValidator from './formValidator.js';
import Card from './card.js';

const placesList = document.querySelector('.places');


// ОТКРЫТИЕ И ЗАКРЫТИЕ ВСЕХ МОДАЛЬНЫХ ОКОН
function openPopup(element) {
    document.addEventListener('keydown', closeByEsc);
    element.classList.add('popup_opened');
};

function closePopup(element) {
    document.removeEventListener('keydown', closeByEsc);
    element.classList.remove('popup_opened');
}

// РАБОТА МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const popupEditProfile = document.querySelector('.popup-edit-profile');
const buttonOpenEditProfile = document.querySelector('.lead__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup-edit-profile__close');
const formEditProfile = document.querySelector('.form-profile');
const profileName = document.querySelector('.lead__title');
const profileJob = document.querySelector('.lead__subtitle');
const inputName = document.querySelector('.form__input_type_name');
const inputJob = document.querySelector('.form__input_type_job');
function insertProfileToForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}
function openPopupEditProfile() {
    insertProfileToForm();
    openPopup(popupEditProfile);
}
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);
buttonCloseEditProfile.addEventListener('click', ()  => {
    closePopup(popupEditProfile);
});
// Сохранение профиля из модалки
function insertFormToProfile() {
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}
function saveProfile(event) {
        event.preventDefault();  
        insertFormToProfile();
        closePopup(popupEditProfile);
}
formEditProfile.addEventListener('submit', saveProfile);

// РАБОТА МОДАЛКИ ДОБАВЛЕНИЯ КАРТОЧКИ МЕСТА
const popupAddPlace = document.querySelector('.popup-add-place');
document.querySelector('.lead__add-button').addEventListener('click', ()  => {
    openPopup(popupAddPlace);
});
document.querySelector('.popup-add-place__close').addEventListener('click', ()  => {
    closePopup(popupAddPlace);
});
// Добавление карточки из модалки
const inputTitle = document.querySelector('.form__input_type_title');
const inputUrl = document.querySelector('.form__input_type_url');

function savePopupAddPlace(event) {
    if(!event.target.classList.contains('button_submit_inactive')) {
        const place = 
        {
        name: inputTitle.value,
        link: inputUrl.value
        };

        const card = new Card(place, '#place', openPopup);
        const cardElement = card.generateCard();
        placesList.prepend(cardElement);

        closePopup(popupAddPlace);
        inputUrl.value = '';
        inputTitle.value = '';
    }

    enableValidationStart(options);
}

document.querySelector('.form-add-place').addEventListener('submit', (event) => {
    event.preventDefault();
    savePopupAddPlace(event);
});

// ЗАКРЫТИЕ МОДАЛКИ С БОЛЬШОЙ КАРТИНКОЙ
const popupImgBig = document.querySelector('.popup-img-big');
const buttonCloseBigImage = document.querySelector('.popup-big-image-close');
buttonCloseBigImage.addEventListener('click', ()  => {
    closePopup(popupImgBig);
});

// ЗАКРЫТИЕ ПО КЛАВИШИ ESC
const closeByEsc = function (evt) {
    if (evt.key === 'Escape') {
        const itemToClose = document.querySelector('.popup_opened');
        closePopup(itemToClose);
    }
};

// ЗАКРЫТИЕ ПО ПУСТОМУ МЕСТУ
const popupsList = Array.from(document.querySelectorAll('.popup'));
popupsList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup')){
            closePopup(evt.target);
        }
    });
});

// ЗАГРУЗКА КАРТОЧЕК ПРИ ОТКРЫТИИ СТРАНИЦЫ
places.forEach( (element) => {
    const card = new Card(element, '#place', openPopup);
    const cardElement = card.generateCard();
    placesList.append(cardElement);
})

const enableValidationStart = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));
    formList.forEach((formElement) => {
      const validation = new FormValidator(formElement, options);
      validation.enableValidation();
    });
  };
  
enableValidationStart(options);