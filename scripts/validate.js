 const options = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitSelector: '.button_submit',
  disabledButtonClass: 'button_submit_inactive',
  inputErrorClass: 'form__input_type_error',
  spanActiveClass: 'form__input-error_active'
 };

const showInputError = (formElement, inputElement, errorMessage, options) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.spanActiveClass);
};
  
const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.spanActiveClass);
  errorElement.textContent = '';
};

// 5. ПРОВЕРЯЕТ ПОЛЯ НА ВАЛИДНОСТЬ
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// 4. ОТОБРАЖАЕТ ИЛИ ПРЯЧЕТ ТЕКСТ ОШИБКИ ОТ РЕЗУЛЬТАТА ФУНКЦИИ 5
const isValid = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
};

// 3. ДЕЛАЕТ КНОПКУ НЕАКТИВНОЙ, ЕСЛИ ХОТЯ-БЫ ОДНО ПОЛЕ НЕВАЛИДНО
const toggleButtonState = (inputList, buttonElement, disabledButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(disabledButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(disabledButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// 2. НАХОДИТ КНОПКУ ФОРМЫ И ВСЕ ПОЛЯ. КНОПКЕ ВЫЗЫВАЕТ ФУНКЦИЮ 3, ПОЛЯМ ВЕШАЕТ СЛУШАТЕЛЕЙ (4)
const setEventListeners = (formElement, options) => {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitSelector);
  toggleButtonState(inputList, buttonElement, options.disabledButtonClass);
  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          isValid(formElement, inputElement, options);
          toggleButtonState(inputList, buttonElement, options.disabledButtonClass);
      });
  });
};

// 1. ПЕРЕБИРАЕТ ФОРМЫ И КАЖДОЙ ФОРМЕ ВЫЗЫВАЕТ ФУНКЦИЮ 2
const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement,options);
  });
};

// ВЫЗЫВАЕМ САМУЮ ПЕРВУЮ ФУНКЦИЮ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
 enableValidation(options); 