'use strict';
/////////////////////////////////////////////////////////////////////////////////////////
const pickup = {
  make: 'Ford',
  model: 'F150',
  speed: 100
}

window.Car = function Car(props){
  this.make = props.make;
  this.model = props.model;
  this.speed = props.speed;

}
Car.prototype.accelerate = function(param1){
  this.speed += param1
  l(this.speed)
}

const wolfsPickup = new Car(pickup);

l(wolfsPickup.speed);
wolfsPickup.accelerate(100);
wolfsPickup.accelerate(1055);
wolfsPickup.accelerate(-55);
wolfsPickup.accelerate(-55);
wolfsPickup.accelerate(-55);



/////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';
export { lectures };
