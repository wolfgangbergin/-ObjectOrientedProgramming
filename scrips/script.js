'use strict';
import { lectures } from './lectures.js';
const wolfgang = {
  fName: 'Wolfgang',
  bYear: '1875',
  job: 'computers Program',
  hourlyWage: `$12`,
};

/////////////////////////////////////////////////////////////////////////////////////////
const Employee = function (props) {
  this.job = props.job;
  this.hourlyWage = props.hourlyWage;
  //   Person.call(this, props);
 this.test717 = function(){
    l('test717')
 }
  this.__proto__ = new Person(props);
};
//Employee.prototype =  new Person(wolfgang);
//Employee.prototype.constructor =  new Person(wolfgang);
const wolfMan = new Employee(wolfgang);
 

l('wolfMan', wolfMan)

//  l(wolfMan);
// wolfMan.pay();
// wolfMan.calcAge();


/////////////////////////////////////////////////////////////////////////////////////////
const kimberly = {
  fName: 'kimy',
  bYear: '2000',
  job: 'Manager',
  hourlyWage: `$120`,
  sub: wolfMan,
};

const Manager = function (props) {
  this.job = props.job;
  this.hourlyWage = props.hourlyWage;
  this.sub = props.sub;
 
  //this.__proto__ = new Employee(props);

};

Manager.prototype =  new Employee(kimberly);
//Manager.prototype.constructor =  new Employee(kimberly);
Manager.prototype.payEmployee = function(){
    l(`${this.fName} is paying ${this.sub.fName} ${this.sub.hourlyWage} an hour!!!`)
  }
const kim = new Manager(kimberly)



// l(kim.__proto__)

// kim.payEmployee();
// kim.calcAge();
// kim.test717();
// kim.payEmployee();

/////////////////////////////////////////////////////////////////////////////////////////
