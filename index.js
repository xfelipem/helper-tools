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
exports.areStringsEqual = exports.isPhoneNumberValid = exports.isNotEmpty = exports.testRegex = exports.areStringsEqualAndNonEmpty = exports.isPasswordValid = exports.isEmailValid = exports.areFormFieldsValid = exports.validateField = undefined;

var _object = __webpack_require__(2);

var _method = __webpack_require__(3);

var validateField = exports.validateField = function validateField(el) {
    //console.log('validateField');
    var value = el.value;
    var validation = el.getAttribute('data-validate');
    var isValid = true;
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
};

var areFormFieldsValid = exports.areFormFieldsValid = function areFormFieldsValid(els) {
    var _this = this;

    var areValid = true;

    (0, _object.forEach)(els, function (el) {
        (0, _method.executeIf)(areValid, validateField, [el], _this);
    });

    return areValid;
};

//DATA VALIDATION
var isEmailValid = exports.isEmailValid = function isEmailValid(email) {
    return testRegex(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, email);
};

var isPasswordValid = exports.isPasswordValid = function isPasswordValid(password, rePassword) {
    executeIfElse(rePassword, areStringsEqualAndNonEmpty, [password, rePassword], this, isNotEmpty, password, this);
};

var areStringsEqualAndNonEmpty = exports.areStringsEqualAndNonEmpty = function areStringsEqualAndNonEmpty(str_1, str_2) {
    return areStringsEqual(isNotEmpty(str_1), isNotEmpty(str_2));
};

var testRegex = exports.testRegex = function testRegex(regex, string) {
    return regex.test(string);
};

var isNotEmpty = exports.isNotEmpty = function isNotEmpty(string) {
    return string && string !== '' ? string : false;
};

var isPhoneNumberValid = exports.isPhoneNumberValid = function isPhoneNumberValid(number) {
    return testRegex(/^-?\d+\.?\d*$/, number);
};

var areStringsEqual = exports.areStringsEqual = function areStringsEqual(str1, srt2) {
    return srt1 === srt2;
};

var validation = {
    validateField: validateField,
    areFormFieldsValid: areFormFieldsValid,
    isEmailValid: isEmailValid,
    isPasswordValid: isPasswordValid,
    areStringsEqualAndNonEmpty: areStringsEqualAndNonEmpty,
    testRegex: testRegex,
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
var forEach = exports.forEach = function forEach(object, method) {
    Object.keys(object).forEach(function (key) {
        var parameter = object[key];

        method(parameter, key, object);
    });

    return object;
};

var object = {
    forEach: forEach
};

exports.default = object;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var bindThisToMethods = exports.bindThisToMethods = function bindThisToMethods(methods, self) {
    return methods.map(function (method) {
        return method.bind(self);
    });
};

var executeIf = exports.executeIf = function executeIf(condition, method, args, self) {
    if (condition) {
        method.apply(self || method, args)();
    }
};

var executeIfElse = exports.executeIfElse = function executeIfElse(condition, method_1, args_1, self_1, method_2, args_2, self_2) {
    if (condition) {
        method_1.apply(self_1 || method_1, args_1)();
    } else {
        method_2.apply(self_2 || method_2, args_2)();
    }
};

var method = {
    bindThisToMethods: bindThisToMethods,
    executeIf: executeIf,
    executeIfElse: executeIfElse
};

exports.default = method;

/***/ })
/******/ ]);