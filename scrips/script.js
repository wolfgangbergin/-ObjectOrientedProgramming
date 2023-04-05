'use strict';
import { lectures } from './lectures.js';
/////////////////////////////////////////////////////////////////////////////////////////
const Corvett = {
  make: 'Chevy',
  model: 'Corvett',
  speed: 200,
  price: '100k'
}

const fastCar = function(props){
  this.price =props.price;
  this.race = function(){
    this.speed += 100
    l(this.speed)
  }
  Object.setPrototypeOf(this, new Car(props))

}

let kimsCar = new fastCar(Corvett)

// l(kimsCar.speed);
// kimsCar.accelerate();
// kimsCar.race();
// kimsCar.brake();
// kimsCar.brake();

/////////////////////////////////////////////////////////////////////////////////////////
