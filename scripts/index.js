const placeTemplate = document.querySelector('#place').content.querySelector('.place');
const placesList = document.querySelector('.places');
const places = [
    {
        name: 'Барханы',
        link: './images/place-barhans.jpg'
    },
    {
        name: 'Темная гора',
        link: './images/place-dark-mountain.jpg'
    },
    {
        name: 'Райский уголок',
        link: './images/place-paradise.jpg'
    },
    {
        name: 'Гора Танисс',
        link: './images/place-tanis-mountain.jpg'
    },
    {
        name: 'Извилистая дорога удачи',
        link: './images/place-winging-road.jpg'
    },
    {
        name: 'Зимняя гора причуд',
        link: './images/place-winter-mountain.jpg'
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
        imageBig.src = element.link;
        imageBig.alt = element.name;
        imageBigSub.textContent = element.name;
        openPopup(popupImgBig);
    });
    placeElement.querySelector('.button__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('button__like_active');
    });
    deleteButton.addEventListener('click', function () {
        placeElement.remove();
    });
    placeElement.querySelector('.place__title').textContent = element.name;
    placeImage.src = element.link;
    placeImage.alt = element.name;
    return placeElement;
}

// ЗАГРУЗКА КАРТОЧЕК ПРИ ОТКРЫТИИ СТРАНИЦЫ
places.forEach(function (element) {
    placesList.append(makePlace(element));
})

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
function openPopupAddPlace() {
    openPopup(popupAddPlace);
}
document.querySelector('.lead__add-button').addEventListener('click', openPopupAddPlace);
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
        link: inputUrl.value,
        img_alt: inputTitle.value,
        name: inputTitle.value
        };
        placesList.prepend(makePlace(place));
        closePopup(popupAddPlace);
        inputUrl.value = '';
        inputTitle.value = '';
    }
    enableValidation(options);
}
document.querySelector('.form-add-place__submit').addEventListener('click', savePopupAddPlace);

// РАБОТА МОДАЛКИ С БОЛЬШОЙ КАРТИНКОЙ
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