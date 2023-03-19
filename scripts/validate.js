import {options} from './data.js';
import FormValidator from './formValidator.js';

const enableValidationStart = (options) => {
  const formList = Array.from(document.querySelectorAll(options.formSelector));
  formList.forEach((formElement) => {
    const validation = new FormValidator(formElement, options);
    validation.enableValidation();
  });
};

enableValidationStart(options);

export {enableValidationStart};