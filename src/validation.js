import { forEach } from 'lodash';


//DATA VALIDATION
export const isEmailValid = function (email) {
    return testRegex(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, email);
}

export const isPasswordValid = function (password, rePassword) {
    if (rePassword) {
        return areStringsEqualAndNonEmpty(password, rePassword);
    } else {
        return isNotEmpty(password);
    }
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

export const areStringsEqual = function (srt1, srt2) {
    return srt1 === srt2;
}

export const isNotNaN = function (number) {
    return !isNaN(number);
}

const validation = {
    isEmailValid,
    isPasswordValid,
    areStringsEqualAndNonEmpty,
    testRegex,
    isNotEmpty,
    isPhoneNumberValid,
    isNotNaN
};

export default validation;