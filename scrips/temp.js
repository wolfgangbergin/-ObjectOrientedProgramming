

// l(jojo.__proto__ === Person.prototype )
// l(Person.prototype.isPrototypeOf(jojo) )
// l(Function.prototype.isPrototypeOf(Person) )
// l(Person.__proto__ === Function.prototype )
//l(Object.prototype.isPrototypeOf(Function) )
//l(Function)
// l(Person.__proto__)
//  l(Person.prototype)
// l(kim)
// l({})
// l(jojo.city)
// l(jojo.hasOwnProperty('city'))
// l(Person.prototype.constructor)
/////////////////////////////////////////////////////////////////////////////////////////

// l(Object.prototype)
// l(Object.__proto__)

//l(kim.__proto__.__proto__.__proto__)
//l(kim.__proto__ === Person.prototype);
// l(Person.__proto__);
//  l(Person.__proto__.__proto__) 
//  l(Person.__proto__.__proto__.__proto__) 
//  l(jojo.__proto__.__proto__.__proto__) 

// d(Person.prototype.constructor.toString())
// d(Person.prototype.constructor)
//const mak = Wolfgang.call(wolfgang, wolfgang)


// l(mak);

// l(Wolfgang.prototype.isPrototypeOf(wolf));
// l(wolf instanceof Wolfgang);
//l(wolf.__proto__ === Wolfgang.prototype);
//wolf.pay();

// let detroit = {fName: 'detriot', bYear: '1999'}
// l(detroit)
 
// l(wolf.hasOwnProperty('fName'))
// l(wolf.hasOwnProperty('hourlyWage'))
 //l(wolf.__proto__)

// l(wolfgang.prototype === wolf.__proto__)

// wolf.pay()
//l(wolf.__proto__ === Wolfgang.prototype)

//Object.setPrototypeOf(wolfMan, new Person(wolfgang));

/////////////////////////////////////////////////////////////////////////////////////////
Array.prototype.unique = function (param1) {
    

    return new Set(this)
    
      
    };
    
    
    
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
    /////////////////////////////////////////////////////////////////////////////////////////
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

l(wolfMan);
wolfMan.pay();
wolfMan.calcAge();
wolfMan.test717();

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

kim.__proto__.payEmployee = function(){
  l(`${this.fName} is paying ${this.sub.fName} ${this.sub.hourlyWage} an hour!!!`)
}
kim.calcAge();
kim.test717();

 kim.payEmployee();
/////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////
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