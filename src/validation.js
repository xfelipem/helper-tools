import { forEach } from './object';
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

//DATA VALIDATION
export const isEmailValid = function (email) {
    return testRegex(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, email);
}

export const isPasswordValid = function (password, rePassword) {
    executeIfElse(rePassword, areStringsEqualAndNonEmpty, [password, rePassword], this, isNotEmpty, password, this);
}

export const areStringsEqualAndNonEmpty = function (str_1, str_2) {
    return areStringsEqual(isNotEmpty(str_1), isNotEmpty(str_2));
};

export const testRegex = function (regex, string) {
    return regex.test(string);
};

export const isNotEmpty = function (string) {
    return string && string !== '' ? string : false;
}

export const isPhoneNumberValid = function (number) {
    return testRegex(/^-?\d+\.?\d*$/, number);
}

export const areStringsEqual = function (str1, srt2) {
    return srt1 === srt2;
}

const validation = {
    validateField,
    areFormFieldsValid,
    isEmailValid,
    isPasswordValid,
    areStringsEqualAndNonEmpty,
    testRegex,
    isNotEmpty,
    isPhoneNumberValid
};

export default validation;