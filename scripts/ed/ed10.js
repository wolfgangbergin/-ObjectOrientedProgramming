'use strict';

import { Account } from '../bankApp/bankApp1.js';
import {Customer} from './ed9.js'

const CreditAcc = function (props) {
    Customer.call(this, props)


 
  this.interestRate = CreditAcc.creditCardIntrest;
 
 Object
};

// CreditAcc.prototype = Object.create(Customer.prototype)
// CreditAcc.prototype.constructor = CreditAcc

Object.defineProperty(CreditAcc, 'creditCardIntrest', {
  get: function () {
    return this._creditCardIntrest;
  },
  set: function (param1) {
    this._creditCardIntrest = param1;
  },
});

Object.defineProperty(CreditAcc.prototype, 'interestRate', {
  get: function () {
    return this._interestRate;
  },
  set: function (param1) {
    this._interestRate = param1;
  },
});

Object.defineProperty(CreditAcc.prototype, 'creditCard', {
  get: function () {
    return this._creditCard;
  },
  set: function (param1) {
    this._creditCard = param1;
  },
});

CreditAcc.creditCardIntrest = 0.33;


let ed = new CreditAcc({
  banana: 'banana',
  firstName: 'Ed',
  owner: 'Ed',
  currency: 'USD',
  pin: 1234,
});

ed.creditCard = [212];
d(ed);


const scripts = `scripts`;

export { scripts };
