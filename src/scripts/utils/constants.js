export const placesListSelector = '.places';
export const placesList = document.querySelector(placesListSelector);
export const addPlaceSelector = '.popup-add-place';
export const popupAddPlace = document.querySelector(addPlaceSelector);
export const formAddPlace = popupAddPlace.querySelector('.form');
export const formEditProfile = document.querySelector('.form-profile');

const barhansImage = new URL('../../images/place-barhans.jpg', import.meta.url);
const darkMountImage = new URL('../../images/place-dark-mountain.jpg', import.meta.url);
const placeParadiseImage = new URL('../../images/place-paradise.jpg', import.meta.url);
const tanisMountainImage = new URL('../../images/place-tanis-mountain.jpg', import.meta.url);
const wingingRoadImage = new URL('../../images/place-winging-road.jpg', import.meta.url);
const winterMountainImage = new URL('../../images/place-winter-mountain.jpg', import.meta.url);
export const places = [
    {
        name: 'Барханы',
        link: barhansImage
    },
    {
        name: 'Темная гора',
        link: darkMountImage
    },
    {
        name: 'Райский уголок',
        link: placeParadiseImage
    },
    {
        name: 'Гора Танисс',
        link: tanisMountainImage
    },
    {
        name: 'Извилистая дорога удачи',
        link: wingingRoadImage
    },
    {
        name: 'Зимняя гора причуд',
        link: winterMountainImage
    }
];

export const options = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitSelector: '.button_submit',
    disabledButtonClass: 'button_submit_inactive',
    inputErrorClass: 'form__input_type_error',
    spanActiveClass: 'form__input-error_active'
   };

export const placeElements = {
    titleSelector: '.place__title',
    imageSelector: '.place__image',
    btnLikeActiveSelector: 'button__like_active',
    btnLikeSelector: '.button__like',
    btnTrashSelector: '.button__trash',
};

// РАБОТА МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
export const editProfileSelector = '.popup-edit-profile';
export const buttonOpenEditProfile = document.querySelector('.lead__edit-button');

// Сохранение профиля из модалки
export const profileName = document.querySelector('.lead__title');
export const profileJob = document.querySelector('.lead__subtitle');
export const inputName = document.querySelector('.form__input_type_name');
export const inputJob = document.querySelector('.form__input_type_job');

// Добавление карточки из модалки
export const inputTitle = document.querySelector('.form__input_type_title');
export const inputUrl = document.querySelector('.form__input_type_url');

// ЗАКРЫТИЕ МОДАЛКИ С БОЛЬШОЙ КАРТИНКОЙ
export const imageBigSelector = '.popup-img-big';
export const popupImgBig = document.querySelector('.popup-img-big');


// Для класса Card
export const imageBig = document.querySelector('.popup-img-big__image');
export const imageBigSub = document.querySelector('.popup-img-big__image-subline');
export const templateSelector = '#place';