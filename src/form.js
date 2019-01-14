import { forEach } from 'lodash';
import { executeIf } from './method';

export const validateField = function (el) {
    //console.log('validateField');
    const value = el.value;
    const validation = el.getAttribute('data-validate');
    let isValid = true;
    //console.log({ value, validation })
    switch (validation) {
        case 'email':
            isValid = isEmailValid(value);
            break;
        case 'required':
            isValid = isNotEmpty(value);
            break;
    }
    //console.log({ isValid });
    return isValid;
}

export const areFormFieldsValid = function (els) {
    let areValid = true;

    forEach(els, (el) => {
        executeIf(areValid, validateField, [el], this);
    });

    return areValid;
}

const form = {
    validateField,
    areFormFieldsValid
}