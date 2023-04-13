'use strict';
import { Car } from './CarProto1.js';


const pickup = {
  make: 'Tesla',
  speed: 100,
  charge: 0,
};
function Ev(props) {
  Car.call(this, props);
  this.charge = props.charge;
}


Object.setPrototypeOf(Ev.prototype, Car.prototype)
// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.constructor = Ev;

Ev.prototype.chargeBattery = function (param1) {
  this.charge = param1;
};
Ev.prototype.accelerate = function (param1) {
  this.speed += 20;
  this.charge--;
  l(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%.`
  );
};

// let wolfsTesla = new Ev(pickup);

// wolfsTesla.chargeBattery(100);

// wolfsTesla.accelerate();
// wolfsTesla.accelerate();

// wolfsTesla.break();
// l(wolfsTesla.__proto__.__proto__.__proto__.__proto__);
// l(wolfsTesla);


export { wolfsTesla };
