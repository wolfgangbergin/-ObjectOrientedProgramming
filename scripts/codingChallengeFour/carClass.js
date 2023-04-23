import {scripting } from './cell.js';

class CarClass {
  _cell;
  #zip;
  constructor(props) {
    (this.make = props.make), (this._speed = props.speed),
    (this.#zip = props.zip), this.cell = props.cell;
  }

  accelerate(param1) {
    this._speed += param1;
   
    l(`${this._speed} km/h`);
    return this;
  }
  get zip() {
    return this.#zip;
  }
  set zip(param1) {
    this.#zip = param1;
  }
  

}
///////////////////////////////////////////////
//CarClass.prototype.kimTest1 = kimTest1

///////////////////////////////////////////////
Object.defineProperty(CarClass.prototype, 'brake', {
  value: function (param1) {
    this._speed -= param1;
   
    l(`${this._speed} km/h`);
    return this;
  },
  writable: 0,
  enumerable: false,
  configurable: false,
 
});

Object.defineProperty(CarClass.prototype, 'cell', {
  get: function () {
    return this._cell;
  },
  set: function (param1) {
    this._cell = param1;
  },
  enumerable: false,
  configurable: false,
});

Object.defineProperty(CarClass.prototype, 'speedUS', {
  get: function () {
    return this._speed * 0.621371;
  },
  set: function (param1) {
    this._speed = param1 * 1.60934;
  },
  enumerable: false,
  configurable: false,
});


export const static1 = 'static1';
export {  CarClass };
