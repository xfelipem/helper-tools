import { _forEach } from './object';

export const validateField = function (el) {
    //console.log('validateField');
    const value = el.value;
    const validation = el.getAttribute('data-validate');
    let isValid = true;
    //console.log({ value, validation })
    switch (validation) {
        case 'required':
            isValid = !!(value && value !== '');
            break;
    }
    //console.log({ isValid });
    return isValid;
}

export const areFormFieldsValid = function (els) {
    let areValid = true;

    _forEach(els, (el) => {
        if (areValid) {
            areValid = validateField(el);
        }
    });

    return areValid;
}

//DATA VALIDATION
export const isEmailValid = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
}

export const isPasswordValid = function (password, rePassword) {
    if(rePassword){
        const passMatch = areStringsEqual(password, rePassword);

        return passMatch && isNotEmpty(password) && isNotEmpty(rePassword);
    }else{
        return isNotEmpty(password);
    }
}

export const isNotEmpty = function (string) {
    return string && string !== '';
}

export const isPhoneNumberValid = function (number) {
    const re = /^-?\d+\.?\d*$/;

    return re.test(number);
}

export const areStringsEqual = function (str1, srt2){
    return srt1 === srt2;
}

const validation = {
    validateField,
    areFormFieldsValid,
    isEmailValid,
    isPasswordValid,
    isNotEmpty,
    isPhoneNumberValid
};

export default validation;