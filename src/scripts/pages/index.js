import '../../styles/pages/index.css';
import {
    places,
    options,
    placesListSelector,
    templateSelector,
    placeElements,

    addPlaceSelector,
    formAddPlace,
    formEditProfile,
    
    editProfileSelector,
    buttonOpenEditProfile,

    profileName,
    profileJob,
    inputName,
    inputJob,
    inputTitle,
    inputUrl,

    imageBigSelector,
} from '../utils/constants.js';

import FormValidator from '../components/Formvalidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupEditProfile = new PopupWithForm ({
    handleSubmit: (event) => {
            event.preventDefault();
            userProfile.setUserInfo();
            popupEditProfile.closePopup();
        }
    },
    options,
    editProfileSelector
);

const popupAddPlace = new PopupWithForm ({
    handleSubmit: (event) => {
        event.preventDefault();
        savePopupAddPlace();
        }
    },
    options,
    addPlaceSelector
);

const validationProfile = new FormValidator(formEditProfile, options);
const validationAddPlace = new FormValidator(formAddPlace, options);
const userProfile = new UserInfo ({profileName, profileJob, inputName, inputJob});

// ОТКРЫТИЕ МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function openPopupEditProfile() {
    userProfile.getUserInfo();
    validationProfile.enableValidation();  
    popupEditProfile.openPopup();
}
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);

// РАБОТА МОДАЛКИ ДОБАВЛЕНИЯ КАРТОЧКИ МЕСТА
document.querySelector('.lead__add-button').addEventListener('click', ()  => {
    popupAddPlace.openPopup();
    validationAddPlace.enableValidation();
});
// Добавление карточки из модалки
function savePopupAddPlace() {
    const place = 
    {
    name: inputTitle.value,
    link: inputUrl.value
    };

    const newCard = new Card({
        data: place,
        placeElements,
        handleImageBig: (imageData) => {
            const popupimage = new PopupWithImage (imageBigSelector, imageData);
            popupimage.openPopup ();
        }
    },
    templateSelector
    );
    const cardNewElement = newCard.generateCard();
    cardsList.prependItem(cardNewElement);

    popupAddPlace.closePopup();
    validationAddPlace.toggleButtonState();
}

// ПОЯВЛЕНИЕ КАРТОЧЕК МЕСТА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
const cardsList = new Section ({
    items: places,
    renderer: (cardItem) => {
        const card = new Card({
            data: cardItem,
            placeElements,
            handleImageBig: (imageData) => {
                const popupimage = new PopupWithImage (imageBigSelector, imageData);
                popupimage.openPopup ();
            }
        },
        templateSelector
        );
        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
    }
  },
  placesListSelector
);

cardsList.renderItems();