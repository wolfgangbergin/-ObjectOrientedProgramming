'use strict';
import { lectures } from './lectures.js';
const wolfgang = {
  fName: 'Wolfgang',
  bYear: '1875',
  job: 'Programmer',
  hourlyWage: `$120`,
};

/////////////////////////////////////////////////////////////////////////////////////////
const Employee = function (props) {
  this.job = props.job;
  this.hourlyWage = props.hourlyWage;
  //   Person.call(this, props);
  this.test717 = function () {
    l(`HI I'M a ${this.job} and I am paded ${this.hourlyWage} dollars an hour`);
  };
  //   this.__proto__ = new Person(props);
  Object.setPrototypeOf(this, new Person(props));
};
//Employee.prototype =  new Person(wolfgang);
//Employee.prototype.constructor =  new Person(wolfgang);
const wolfMan = new Employee(wolfgang);

//const wolfMan = Object.create(new Person(wolfgang), new Employee(wolfgang));

// Object.setPrototypeOf(wolfMan, new Person(wolfgang));

// l(wolfMan);
// wolfMan.pay();
// wolfMan.calcAge();
// wolfMan.test717();

/////////////////////////////////////////////////////////////////////////////////////////
const kimberly = {
  fName: 'kimy',
  bYear: '2000',
  job: 'Manager',
  hourlyWage: `$220`,
  sub: wolfMan,
};

const Manager = function (props) {
  this.job = props.job;
  this.hourlyWage = props.hourlyWage;
  this.sub = props.sub;
//   this.payEmployee = function(){
//         l(`${this.fName} is paying ${this.sub.fName} ${this.sub.hourlyWage} an hour!!!`)
//       }
  this.__proto__ = new Employee(props);
Object.setPrototypeOf(this, new Employee(props));
};

//Manager.prototype =  new Employee(kimberly);
//Manager.prototype.constructor =  new Employee(kimberly);
// Manager.prototype.payEmployee = function(){
//     l(`${this.fName} is paying ${this.sub.fName} ${this.sub.hourlyWage} an hour!!!`)
//   }
const kim = new Manager(kimberly)

l(kim.__proto__)


kim.calcAge();
kim.test717();

 kim.payEmployee();

/////////////////////////////////////////////////////////////////////////////////////////
