'use strict'


  

let Car = function(props){
    this.make = props.make
    this.speed = props.speed
    this.testInit(props)
}

Car.prototype.testInit = function(props){
    this._testInit = props.testInit
}
Car.prototype.accelerate = function(){
    this.speed += 10
    l(`${this.speed} km/h`)
}
Car.prototype.break = function(){
    this.speed -=  5
    l(`${this.speed} km/h`)
}

let macsCar = new Car({make: 'detroit', speed:20, testInit: 'scripting'})

//  l(macsCar)
// l(`///////////////////////////////////////////////`)
export {Car}