class CarClass {
  constructor(props) {
    (this.make = props.make), (this.speed = props.speed);
  }

  accelerate(param1) {
    this.speed += param1;
    l(this.speed);
    return this;
  }
}



Object.defineProperty(CarClass.prototype, 'brake2', {
  
   value: function(param1){
    this.speed -= param1;
    l(this.speed);
    return this;
   },
  
});





const wolfsCar = new CarClass({ make: 'ford', speed: 0 });

//wolfsCar.accelerate(10).accelerate(10).accelerate(10).accelerate(10).brake2(10).brake2(10).brake2(10);

// d(wolfsCar)
CarClass.prototype.testWolf1 = '777'
// d(wolfsCar.testWolf1);



export const static1 = 'static1';
export {wolfsCar}