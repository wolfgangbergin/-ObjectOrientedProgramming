'use strict'


  

let Car = function(props){
    this.make = props.make
    this.speed = props.speed
}

Car.prototype.accelerate = function(){
    this.speed += 10
    l(`${this.speed} km/h`)
}
Car.prototype.break = function(){
    this.speed -=  5
    l(`${this.speed} km/h`)
}



export {Car}