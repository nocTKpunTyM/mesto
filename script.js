let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let profileName = document.querySelector('.lead__title');
let profileJob = document.querySelector('.lead__subtitle');
let inputName = document.querySelector('.popup__form-input_type_name');
let inputJob = document.querySelector('.popup__form-input_type_job');

function insertProfileToForm() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}
function openPopup() {
    insertProfileToForm();
    popup.classList.add('popup_opened');
}
let editButton = document.querySelector('.lead__edit-button');
editButton.addEventListener('click', openPopup);

function insertFormToProfile() {
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}
function savePopup(event) {
    event.preventDefault();
    insertFormToProfile();
    popup.classList.remove('popup_opened');
}
popupForm.addEventListener('submit', savePopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
let popupX = document.querySelector('.popup__close-button');
popupX.addEventListener('click', closePopup);