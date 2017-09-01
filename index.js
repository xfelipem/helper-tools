/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validation = __webpack_require__(1);

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helperTools = {
    validation: _validation2.default
};

exports.default = helperTools;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.areStringsEqual = exports.isPhoneNumberValid = exports.isNotEmpty = exports.isPasswordValid = exports.isEmailValid = exports.areFormFieldsValid = exports.validateField = undefined;

var _object = __webpack_require__(2);

var validateField = exports.validateField = function validateField(el) {
    //console.log('validateField');
    var value = el.value;
    var validation = el.getAttribute('data-validate');
    var isValid = true;
    //console.log({ value, validation })
    switch (validation) {
        case 'required':
            isValid = !!(value && value !== '');
            break;
    }
    //console.log({ isValid });
    return isValid;
};

var areFormFieldsValid = exports.areFormFieldsValid = function areFormFieldsValid(els) {
    var areValid = true;

    (0, _object._forEach)(els, function (el) {
        if (areValid) {
            areValid = validateField(el);
        }
    });

    return areValid;
};

//DATA VALIDATION
var isEmailValid = exports.isEmailValid = function isEmailValid(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
};

var isPasswordValid = exports.isPasswordValid = function isPasswordValid(password, rePassword) {
    if (rePassword) {
        var passMatch = areStringsEqual(password, rePassword);

        return passMatch && isNotEmpty(password) && isNotEmpty(rePassword);
    } else {
        return isNotEmpty(password);
    }
};

var isNotEmpty = exports.isNotEmpty = function isNotEmpty(string) {
    return string && string !== '';
};

var isPhoneNumberValid = exports.isPhoneNumberValid = function isPhoneNumberValid(number) {
    var re = /^-?\d+\.?\d*$/;

    return re.test(number);
};

var areStringsEqual = exports.areStringsEqual = function areStringsEqual(str1, srt2) {
    return srt1 === srt2;
};

var validation = {
    validateField: validateField,
    areFormFieldsValid: areFormFieldsValid,
    isEmailValid: isEmailValid,
    isPasswordValid: isPasswordValid,
    isNotEmpty: isNotEmpty,
    isPhoneNumberValid: isPhoneNumberValid
};

exports.default = validation;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _forEach = exports._forEach = function _forEach(object, method) {
    Object.keys(object).forEach(function (key) {
        var parameter = object[key];

        method(parameter, key, object);
    });

    return object;
};

/***/ })
/******/ ]);