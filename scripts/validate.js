const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};
  
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

// 5. ПРОВЕРЯЕТ ПОЛЯ НА ВАЛИДНОСТЬ
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// 4. ОТОБРАЖАЕТ ИЛИ ПРЯЧЕТ ТЕКСТ ОШИБКИ ОТ РЕЗУЛЬТАТА ФУНКЦИИ 5
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// 3. ДЕЛАЕТ КНОПКУ НЕАКТИВНОЙ, ЕСЛИ ХОТЯ-БЫ ОДНО ПОЛЕ НЕВАЛИДНО
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_submit_inactive');
  } else {
    buttonElement.classList.remove('button_submit_inactive');
  }
};

// 2. НАХОДИТ КНОПКУ ФОРМЫ И ВСЕ ПОЛЯ. КНОПКЕ ВЫЗЫВАЕТ ФУНКЦИЮ 3, ПОЛЯМ ВЕШАЕТ СЛУШАТЕЛЕЙ (4)
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.button_submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement);
          toggleButtonState(inputList, buttonElement);
      });
  });
};

// 1. ПЕРЕБИРАЕТ ФОРМЫ И КАЖДОЙ ФОРМЕ ВЫЗЫВАЕТ ФУНКЦИЮ 2
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

// ВЫЗЫВАЕМ САМУЮ ПЕРВУЮ ФУНКЦИЮ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
 enableValidation(); 