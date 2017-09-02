import validation from '../validation';
import chai from 'chai';
import chaiVirtualDom from 'chai-virtual-dom';
import virtualDom from 'virtual-dom';
import createElement from 'virtual-dom/create-element';
import 'babel-polyfill';

chai.use(chaiVirtualDom);

const validateField = validation.validateField;

const h = virtualDom.h;
const expect = chai.expect;
const validEmail = 'pepe@pepe.com';
const invalidEmail = 'pepe@.com';
const validString = 'Carlos Pepino';
const emptyString = '';
const setValue = function (el, value) {
    el.value = value;
}

let vInputRequired = createElement(h('input', {
    'data-validate': 'required'
}));

let vInputEmail = createElement(h('input', {
    'data-validate': 'email'
}));

let vInputNotRequired = createElement(h('input'));

console.log({ vInputEmail, vInputNotRequired, vInputRequired });

//Validate Field: False Case
expect(validateField(vInputEmail.value)).to.be.false;
setValue(vInputRequired, emptyString);
expect(validateField(vInputRequired.value)).to.be.false;
expect(validateField(vInputEmail.value)).to.be.false;

//Validate Field: True Case
setValue(vInputRequired, validString);
setValue(vInputEmail, validEmail);
expect(validateField(vInputRequired.value)).to.be.true;
expect(validateField(vInputEmail.value)).to.be.true;
expect(validateField(vInputNotRequired.value)).to.be.true;
setValue(vInputNotRequired, emptyString);
expect(validateField(vInputNotRequired.value)).to.be.true;
