!function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.forEach=function(e,t){return Object.keys(e).forEach(function(i){var r=e[i];t(r,i,e)}),e},n={forEach:r};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.bindThisToMethods=function(e,t){return e.map(function(e){return e.bind(t)})},n=t.executeIf=function(e,t,i,r){e&&t.apply(r||t,i)()},o=t.executeIfElse=function(e,t,i,r,n,o,a){e?t.apply(r||t,i)():n.apply(a||n,o)()},a={bindThisToMethods:r,executeIf:n,executeIfElse:o};t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.form=t.object=t.method=t.validation=void 0;var r=i(3),n=i(1),o=i(0),a=i(4),u=t.validation=r.validation,s=t.method=n.method,d=t.object=o.object,l=t.form=a.form,c={form:l,validation:u,method:s,object:d};t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.areStringsEqual=t.isPhoneNumberValid=t.isNotEmpty=t.testRegex=t.areStringsEqualAndNonEmpty=t.isPasswordValid=t.isEmailValid=void 0;var r=(i(0),i(1)),n=t.isEmailValid=function(e){return u(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e)},o=t.isPasswordValid=function(e,t){(0,r.executeIfElse)(t,a,[e,t],this,s,e,this)},a=t.areStringsEqualAndNonEmpty=function(e,t){return l(s(e),s(t))},u=t.testRegex=function(e,t){return e.test(t)},s=t.isNotEmpty=function(e){return!(!e||""===e)&&e},d=t.isPhoneNumberValid=function(e){return u(/^-?\d+\.?\d*$/,e)},l=t.areStringsEqual=function(e,t){return srt1===t},c={isEmailValid:n,isPasswordValid:o,areStringsEqualAndNonEmpty:a,testRegex:u,isNotEmpty:s,isPhoneNumberValid:d};t.default=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.areFormFieldsValid=t.validateField=void 0;var r=i(0),n=i(1),o=t.validateField=function(e){var t=e.value,i=e.getAttribute("data-validate"),r=!0;switch(i){case"email":r=isEmailValid(t);break;case"required":r=isNotEmpty(t)}return r};t.areFormFieldsValid=function(e){var t=this;return(0,r.forEach)(e,function(e){(0,n.executeIf)(!0,o,[e],t)}),!0}}]);