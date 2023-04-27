import '../../styles/pages/index.css';
import {
    places,
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
} from '../utils/constants.js';

import FormValidator from '../components/Formvalidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const userProfile = new UserInfo ({profileName, profileJob});

const popupEditProfile = new PopupWithForm ({
    handleSubmit: (inputs) => {
        const inputName = inputs.name;
        const inputJob = inputs.job;
        userProfile.setUserInfo(inputName, inputJob);
        popupEditProfile.close();
        }
    },
    options,
    editProfileSelector
);
popupEditProfile.setEventListeners();

const popupAddPlace = new PopupWithForm ({
    handleSubmit: (inputs) => {        
        savePopupAddPlace(inputs);
        }
    },
    options,
    addPlaceSelector
);
popupAddPlace.setEventListeners();

const validationProfile = new FormValidator(formEditProfile, options);
validationProfile.enableValidation();
const validationAddPlace = new FormValidator(formAddPlace, options);
validationAddPlace.enableValidation();
const popupImage = new PopupWithImage (imageBigSelector);

function createCard (place) {
    const card = new Card({
        data: place,
        placeElements,
        handleImageBig: (imageData) => {
            popupImage.open (imageData);
        }
    },
    templateSelector
    );   
    return card;
}

// ОТКРЫТИЕ МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
function openPopupEditProfile() {
    inputName.value = userProfile.getUserInfo().profileName;
    inputJob.value = userProfile.getUserInfo().profileJob;
    popupEditProfile.open();
}
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);

// РАБОТА МОДАЛКИ ДОБАВЛЕНИЯ КАРТОЧКИ МЕСТА
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
    const cardNewElement = createCard (place).generateCard();
    cardsList.prependItem(cardNewElement);

    popupAddPlace.close();
    validationAddPlace.toggleButtonState();
}

// ПОЯВЛЕНИЕ КАРТОЧЕК МЕСТА ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
const cardsList = new Section ({
    items: places,
    renderer: (cardItem) => {
        const cardElement = createCard (cardItem).generateCard();
        cardsList.addItem(cardElement);
    }
  },
  placesListSelector
);

cardsList.renderItems();