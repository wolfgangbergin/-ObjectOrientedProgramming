'use strict';
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

const PersonClass  = class  {
  constructor(props){
   
   this.fName = props.fName;
   this.bYear = props.bYear;
   this.wolfTest = props.wolfTest
  }
 
  greet(){
    l(`Hay im ${this.fName}`)
  }
}
PersonClass.prototype.calcAge = function(){
 l(`HI I'M ${this.fName} and I am ${2023 - +`${this.bYear}`} years old`);
}; 

let jojo = new PersonClass({ fName: 'jojo', bYear: '1899', wolfTest: 'test313' });


l(jojo)
// l(jojo.__proto__)
// jojo.calcAge()
//l(jojo.__proto__ === PersonClass.prototype)
jojo.greet()
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';
export { lectures };
