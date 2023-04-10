'use strict';

class CarClass {
  constructor(props) {
    this.make = props.make;
    this.speedUK = props.speedUK;
    this.owner = props.owner;
  }
  accelerate() {
    this.speedUK = this.speedUK + 10;

    l(`${this.speedUS} mph / ${this.speedUK} km/h`);
  }
  brake() {
    this.speedUK = this.speedUK - 5;
    l(`${this.speedUS} mph / ${this.speedUK} km/h`);
  }
  set owner(param1) {
    this._owner = `${param1} ${CarClass.wolf777} `;
  }
  get owner() {
    return this._owner;
  }
  get speedUS() {
    return this.speedUK / 1.6;
  }
  set speedUS(param1) {
    this.speedUK = param1 * 1.6;
  }
  get speedUK() {
    return this._speedUK;
  }
  set speedUK(param1) {
    this._speedUK = param1;
  }
  static get wolf777() {
   return this._wolf777 
  }
  static set wolf777(param1) {
    this._wolf777 = param1;
    
  }

  static kimTest1(param1){
    if(param1){
        
        this.speedUK = param1
    }else if(!param1){
        return this.speedUK

    }
  }
}

CarClass.wolf777 = '777';

 let BMW = new CarClass({make: 'BMW', speedUK: 120, owner: 'kim '})

// let Mercedes = new CarClass({make: 'Mercedes', speedUK: 80, owner: 'jojo'})

let ford = new CarClass({ make: 'ford', speedUK: 120, owner: 'wolf ' });

//  BMW.speedUS = 100;
//  BMW.speedUK = 1000
// BMW.accelerate()
// BMW.brake()
// l(BMW.speedUK)
// l(BMW.speedUS)



BMW.banana = CarClass.kimTest1


BMW.banana(3999)
l(BMW)
l(BMW.banana())


export const challenge2 = 'challenge2';
