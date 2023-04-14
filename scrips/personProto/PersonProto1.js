"use strict";
window.Person = function (props) {
    this.fName = props.fName;
    this.bYear = props.bYear;
    
    // test313
  };
  
  
  Person.prototype.pay = function () {
   l(`${this.fName} is payed an Hourly  rate ${this.hourlyWage}!!!`)
    
  };
  
  Person.prototype.calcAge = function () {
     
    l(`HI I'M ${this.fName} and I am ${2023 - +`${this.bYear}`} years old and i use a ${this.computer} 
    and i have a ${this.GPA} GPA!`);
  };
  

  
 let banana = 'banana'

  export default banana;