'use strict';

import { Account } from '../bankApp/bankApp1.js';

const CreditAcc = function (props) {


this.banana = props.banana
  this.firstName = props.firstName;
  this.interestRate = CreditAcc.creditCardIntrest;
 
 
};

CreditAcc.prototype = Object.create(Account.prototype)

CreditAcc.prototype.constructor = CreditAcc

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

//  CreditAcc.prototype = Object.create(Account.prototype);
//  CreditAcc.prototype.constructor = Account;
let ed = new CreditAcc({
  banana: 'banana',
  firstName: 'Ed',
  owner: 'Ed',
  currency: 'USD',
  pin: 1234,
});

// ed.creditCard = [212];
// d(ed);
// ed.requestLoan(919)


const scripts = `scripts`;

export { scripts };
