const placeTemplate = document.querySelector('#place').content.querySelector('.place');
const placesList = document.querySelector('.places');
const places = [
    {
        img_src: './images/place-barhans.jpg',
        img_alt: 'Барханы',
        title: 'Барханы'
    },
    {
        img_src: './images/place-dark-mountain.jpg',
        img_alt: 'Темная гора',
        title: 'Темная гора'
    },
    {
        img_src: './images/place-paradise.jpg',
        img_alt: 'Райский уголок',
        title: 'Райский уголок'
    },
    {
        img_src: './images/place-tanis-mountain.jpg',
        img_alt: 'Гора Танисс',
        title: 'Гора Танисс'
    },
    {
        img_src: './images/place-winging-road.jpg',
        img_alt: 'Извилистая дорога удачи',
        title: 'Извилистая дорога удачи'
    },
    {
        img_src: './images/place-winter-mountain.jpg',
        img_alt: 'Зимняя гора причуд',
        title: 'Зимняя гора причуд'
    }
];

// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ КАРТОЧКИ МЕСТА
const imageBig = document.querySelector('.popup-img-big__image');
const imageBigSub = document.querySelector('.popup-img-big__image-subline');
function makePlace(element) {
    const placeElement = placeTemplate.cloneNode(true);
    const deleteButton = placeElement.querySelector('.button__trash');
    const placeImage = placeElement.querySelector('.place__image');
    placeImage.addEventListener('click', function (evt) {
        imageBig.src = evt.target.src;
        imageBigSub.textContent = evt.target.alt;
        openPopup(popupImgBig);
    });
    placeElement.querySelector('.button__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('button__like_active');
    });
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest('.place');
        listItem.remove();
    });
    placeElement.querySelector('.place__title').textContent = element.title;
    placeImage.src = element.img_src;
    placeImage.alt = element.img_alt;
    return placeElement;
}

// ЗАГРУЗКА КАРТОЧЕК ПРИ ОТКРЫТИИ СТРАНИЦЫ
places.forEach(function (element) {
    placesList.append(makePlace(element));
})

// ОТКРЫТИЕ И ЗАКРЫТИЕ ВСЕХ МОДАЛЬНЫХ ОКОН
function openPopup(element) {
    element.classList.add('popup_opened');
}
function closePopup() {
    popupForClose = document.querySelector('.popup_opened');
    popupForClose.classList.remove('popup_opened');
}

// РАБОТА МОДАЛКИ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const popupEditProfile = document.querySelector('.popup-edit-profile');
const buttonOpenEditProfile = document.querySelector('.lead__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup-edit-profile__close');
const buttonSaveEditProfile = document.querySelector('.form-profile__submit');
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
buttonCloseEditProfile.addEventListener('click', closePopup);
// Сохранение профиля из модалки
function insertFormToProfile() {
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}
function saveProfile(event) {
    event.preventDefault();
    insertFormToProfile();
    closePopup();
}
buttonSaveEditProfile.addEventListener('click', saveProfile);

// РАБОТА МОДАЛКИ ДОБАВЛЕНИЯ КАРТОЧКИ МЕСТА
const popupAddPlace = document.querySelector('.popup-add-place');
function openPopupAddPlace() {
    openPopup(popupAddPlace);
}
document.querySelector('.lead__add-button').addEventListener('click', openPopupAddPlace);
document.querySelector('.popup-add-place__close').addEventListener('click', closePopup);
// Добавление карточки из модалки
const inputTitle = document.querySelector('.form__input_type_title');
const inputUrl = document.querySelector('.form__input_type_url');
function savePopupAddPlace(event) {
    event.preventDefault();
    const place = 
    {
    img_src: inputUrl.value,
    img_alt: inputTitle.value,
    title: inputTitle.value
    };
    placesList.prepend(makePlace(place));
    closePopup();
    inputUrl.value = '';
    inputTitle.value = '';
}
document.querySelector('.form-place-add').addEventListener('click', savePopupAddPlace);

// РАБОТА МОДАЛКИ С БОЛЬШОЙ КАРТИНКОЙ
const popupImgBig = document.querySelector('.popup-img-big');
const buttonCloseBigImage = document.querySelector('.popup-big-image-close');
buttonCloseBigImage.addEventListener('click', closePopup);