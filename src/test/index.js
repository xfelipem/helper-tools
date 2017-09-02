import chai from 'chai';
import 'babel-polyfill';
import './validation_test';

const expect = chai.expect

expect('a').to.be.a('number');