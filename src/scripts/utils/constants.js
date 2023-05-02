export const placesListSelector = '.places';
export const placesList = document.querySelector(placesListSelector);
export const addPlaceSelector = '.popup-add-place';
export const popupAddPlace = document.querySelector(addPlaceSelector);
export const formAddPlace = popupAddPlace.querySelector('.form');
export const formEditProfile = document.querySelector('.form-profile');
export const formEditAvatar = document.querySelector('.form-change-avatar');
export const changeAvatarButton = document.querySelector('.lead__picture-button');

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
    likeCount: '.place__like-count'
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
export const buttonOpenAddPlace = document.querySelector('.lead__add-button')
export const inputTitle = document.querySelector('.form__input_type_title');
export const inputUrl = document.querySelector('.form__input_type_url');

// ЗАКРЫТИЕ МОДАЛКИ С БОЛЬШОЙ КАРТИНКОЙ
export const imageBigSelector = '.popup-img-big';
export const popupImgBig = document.querySelector('.popup-img-big');

// Для класса Card
export const imageBig = document.querySelector('.popup-img-big__image');
export const imageBigSub = document.querySelector('.popup-img-big__image-subline');
export const templateSelector = '#place';

// Для работы с аватаркой
export const changeAvatarSelector = '.popup-change-avatar';
export const avatarBlock = document.querySelector('.lead__picture');
export const inputAvatar = document.querySelector('.form__input_type_avatar');

// Удаление каротчек
export const removeCardSelector = '.popup-remove-place';
export const inputCardId =document.querySelector('.form__input_type_cardId')