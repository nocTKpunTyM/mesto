let popup = document.querySelector('.popup');
let popupAddPlace = document.querySelector('.popup-add-place');
let popupForm = document.querySelector('.popup__form');
let popupAddPlaceForm = document.querySelector('.popup-add-place__form');
let popupImgBig = document.querySelector('.popup-img-big');

let profileName = document.querySelector('.lead__title');
let profileJob = document.querySelector('.lead__subtitle');
let inputName = document.querySelector('.popup__form-input_type_name');
let inputJob = document.querySelector('.popup__form-input_type_job');

let inputTitle = document.querySelector('.popup-add-place__form-input_type_title');
let inputUrl = document.querySelector('.popup-add-place__form-input_type_url');

let editButton = document.querySelector('.lead__edit-button');
let addPlaceButton = document.querySelector('.lead__add-button');
let popupX = document.querySelector('.popup__close-button');
let popupXAddPlace = document.querySelector('.popup-add-place__close-button');
let popupXImgBig = document.querySelector('.popup-img-big__close-button');

const placeTemplate = document.querySelector('#place').content;
const placesList = document.querySelector('.places');
const imageBig = document.querySelector('.popup-img-big__image');
const imageBigSub = document.querySelector('.popup-img-big__image-subline');

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

places.forEach(function (element) {
    const placeElement = placeTemplate.cloneNode(true);
    const deleteButton = placeElement.querySelector('.place__trash-button');
    let placeImage = placeElement.querySelector('.place__image');
    placeImage.src = element.img_src;
    placeImage.alt = element.img_alt;
    placeImage.addEventListener('click', function (evt) {
        imageBig.src = evt.target.src;
        imageBigSub.textContent = evt.target.alt;
        popupImgBig.classList.add('popup-img-big_opened');
    });
    placeElement.querySelector('.place__title').textContent = element.title;
    placeElement.querySelector('.place__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__like-button_active');
    });
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest('.place');
        listItem.remove();
    }); 
    placesList.append(placeElement);
})

function insertProfileToForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function openPopup() {
    insertProfileToForm();
    popup.classList.add('popup-add-place_opened');
}

function closePopup() {
    popup.classList.remove('popup-add-place_opened');
}

function insertFormToProfile() {
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

function savePopup(event) {
    event.preventDefault();
    insertFormToProfile();
    closePopup();
}

function openPopupAddPlace() {
    inputUrl.value =  '';
    inputTitle.value =  '';
    popupAddPlace.classList.add('popup-add-place_opened');
}
    
function closePopupAddPlace() {
    popupAddPlace.classList.remove('popup-add-place_opened');
}

function openPopupImgBig() {
    popupImgBig.classList.add('popup-img-big_opened');
}

function closePopupImgBig() {
    popupImgBig.classList.remove('popup-img-big_opened');
}

function savePopupAddPlace(event) {
    event.preventDefault();
    addPlace();
    closePopupAddPlace();
}

function addPlace () {
    const placeElement = placeTemplate.cloneNode(true);
    const deleteButton = placeElement.querySelector('.place__trash-button');
    let placeImage = placeElement.querySelector('.place__image');
    placeImage.src = inputUrl.value;
    placeImage.alt = inputTitle.value;
    placeImage.addEventListener('click', function (evt) {
        imageBig.src = evt.target.src;
        imageBigSub.textContent = evt.target.alt;
        popupImgBig.classList.add('popup-img-big_opened');
    });
    placeElement.querySelector('.place__title').textContent = inputTitle.value;
    placeElement.querySelector('.place__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__like-button_active');
    });
    deleteButton.addEventListener('click', function () {
        const listItem = deleteButton.closest('.place');
        listItem.remove();
    });
    placesList.prepend(placeElement);
}

editButton.addEventListener('click', openPopup);
popupX.addEventListener('click', closePopup);
addPlaceButton.addEventListener('click', openPopupAddPlace);
popupXImgBig.addEventListener('click', closePopupImgBig);
popupXAddPlace.addEventListener('click', closePopupAddPlace);
popupForm.addEventListener('submit', savePopup);
popupAddPlaceForm.addEventListener('submit', savePopupAddPlace);