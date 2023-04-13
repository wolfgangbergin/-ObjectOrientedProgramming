'use strict';


Function.prototype.CCC = 'CCC313'



class CarClass1 {
  
  constructor(props) {
    this.make = props.make;
    this.speedUK = props.speedUK;
    this.owner = props.owner;
  
  };
  
  accelerate() {
    this.speedUK = this.speedUK + 10;

    l(`${this.speedUS} mph / ${this.speedUK} km/h`);
  }
  brake() {
    this.speedUK = this.speedUK - 5;
    l(`${this.speedUS} mph / ${this.speedUK} km/h`);
  }
  set owner(param1) {
    this._owner = `${param1} ${CarClass1.wolf777} `;
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
// l(CarClass1.__proto__)
// l(CarClass1.prototype)
Object.setPrototypeOf(CarClass1.prototype, CarClass1.__proto__)
//CarClass1.prototype.wolfTest = CarClass1.__proto__.wolfTest
CarClass1.wolf777 = '777';

 let BMW = new CarClass1({make: 'BMW', speedUK: 120, owner: 'kim '})

// let Mercedes = new CarClass1({make: 'Mercedes', speedUK: 80, owner: 'jojo'})

let ford = new CarClass1({ make: 'ford', speedUK: 120, owner: 'wolf ' });


let CCC = new Number(313)
 
ford.CCC = CCC
ford.jojoTest1 = new Function('return 1+8')


BMW.wolf = '131313'
const challenge2 = 'challenge2';
export {challenge2, CarClass1}
