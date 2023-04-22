import {kimTest1, } from './kimTest.js';
class CarClass {
  _cell;
  #zip;
  constructor(props) {
    (this.make = props.make), (this.speed = props.speed),(this.#zip = props.zip);
  }

  accelerate(param1) {
    this.speed += param1;
    l(this.speed);
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
CarClass.prototype.kimTest1 = kimTest1

///////////////////////////////////////////////
Object.defineProperty(CarClass.prototype, 'brake', {
  value: function (param1) {
    this.speed -= param1;
    l(this.speed);
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

const wolfsCar = new CarClass({ make: 'ford', speed: 0, zip: 12345 });

//wolfsCar.accelerate(10).accelerate(10).brake(1).brake(1);

wolfsCar.cell = '313-255-7102';

export const static1 = 'static1';
export { wolfsCar };
