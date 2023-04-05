'use strict';
Array.prototype.unique = function (param1) {
    

return new Set(this)

  
};

window.Person = function (props) {
  this.fName = props.fName;
  this.bYear = props.bYear;
  
  // test313
};


Person.prototype.pay = function () {
 l(`${this.fName} is payed an Hourly  rate ${this.hourlyWage}!!!`)
  
};

Person.prototype.calcAge = function () {
   
  l(`HI I'M ${this.fName} and I am ${2023 - +`${this.bYear}`} years old`);
};


let jojo = new Person({ fName: 'jojo', bYear: '1899' });
/////////////////////////////////////////////////////////////////////////////////////////





const arr1 = new Array(1, 2, 3, 3, 3, 3, 4)


//  l(arr1)

//  l( arr1.unique())
// l(arr1.__proto__ === Array.prototype)
// l(arr1.__proto__.__proto__)
/////////////////////////////////////////////////////////////////////////////////////////

// const H1 = document.querySelector('h1');

// d(H1.__proto__.__proto__.__proto__)
// d(()=>1+1)
/////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';
export { lectures };
