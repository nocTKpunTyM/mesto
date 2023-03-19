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

const options = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitSelector: '.button_submit',
    disabledButtonClass: 'button_submit_inactive',
    inputErrorClass: 'form__input_type_error',
    spanActiveClass: 'form__input-error_active'
   };

const placeElements = {
    titleSelector: '.place__title',
    imageSelector: '.place__image',
    btnLikeActiveSelector: 'button__like_active',
    btnLikeSelector: '.button__like',
    btnTrashSelector: '.button__trash',
};

export {places, options, placeElements};