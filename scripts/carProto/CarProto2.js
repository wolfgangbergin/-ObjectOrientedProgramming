'use strict';
import { Car } from './CarProto1.js';
 import { CarClass1 } from '../challengeTwo/carClass1.js';


const pickup = {
  make: 'Ford',
  speedUK: 100,
  charge: 0,
  parent: Car,
};
const Tesla = {
  make: 'Tesla',
  speedUK: 0,
  charge: 0,
  owner: 'Kim',
  parent: CarClass1,
};

function Ev(props) {
  this.temp = new props.parent(props);

//  for (const [key, val ] of Object.entries(this.temp) ) {
// //    l(key, val)
//    this[key] = val

//  }
  //   props.parent.call(this, props);
  this.charge = props.charge;
  this.brake = function() {
    this.speedUK -= 20;
    this.charge++;
    l( `${this.make} going at ${this.speedUK} km/h with a charge of ${this.charge}%.`)

  } 
  Object.setPrototypeOf(Ev.prototype, props.parent.prototype);
}

// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.constructor = Ev;
Object.defineProperty(Ev.prototype, 'charge', {
    get: function () {
        return this._charge
    },
    set: function (param1) {
        this._charge = param1
    }
})  


// Ev.prototype.charge = function (param1) {
//   this.charge = param1;
// };
Ev.prototype.accelerate = function (param1) {
  this.speedUK += 20;
  this.charge--;
  l(
    `${this.make} going at ${this.speedUK} km/h with a charge of ${this.charge}%.`
  );
};

// Ev.prototype.brake = function (param1) {
//     this.speedUK -= 20;
//     this.charge++;
//     l( `${this.make} going at ${this.speedUK} km/h with a charge of ${this.charge}%.`)
//     };
// let wolfsTesla = new Ev(pickup);


let kimsTesla = new Ev(Tesla);
// l(kimsTesla)
const wolfMan = 'wolfMan'

export { wolfMan };
