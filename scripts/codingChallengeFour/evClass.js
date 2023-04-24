import { CarClass } from './carClass.js';
import {kimsCarPhone} from './carPhone.js'




class EvClass extends CarClass {
  #charge = 0;
  constructor(props) {
    super(props);
    this.chargeBattery(props.charge);
    
    this.cell = kimsCarPhone.carPhoneInit(props)
  }

  chargeBattery(param1) {
    this.#charge += param1;
    return this;
  }

  accelerate(param1) {
    this._speed += param1;
    this.chargeBattery(-param1)
    l(`${this._speed} km/h`);
    return this;
  }
}

Object.defineProperty(EvClass.prototype, 'brake', {
    value: function (param1) {
      this._speed -= param1;
      this.chargeBattery(param1)
      l(`${this._speed} km/h`);
      return this;
    },
    writable: 0,
    enumerable: false,
    configurable: false,
   
  });

const kimsCar =  new EvClass({owner: 'kim',
battery: 55, number: '734-748-9107', make: 'ford', speed: 0,
 zip: 12345, charge: 100, cell: '313-555-7102' })
 //kimsCar.accelerate(10).accelerate(10).brake(1).brake(1).brake(1).chargeBattery(100).brake(1).brake(1);


// kimsCar.cell.makeCall('222').chargeBattery(99).findPhone()
///////////////////////////////////////////////
d(kimsCar.cell)

l(`///////////////////////////////////////////////`)
// kimsCar.speedUS = 100
// d(kimsCar)
// l(kimsCar.speedUS)

const seventySeven = 'seventySeven';

export { seventySeven };
