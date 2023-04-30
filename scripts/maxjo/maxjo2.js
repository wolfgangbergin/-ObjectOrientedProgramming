import { wolfMan } from '../carProto/CarProto2.js';
import {Person} from './maxjo1.js'
const kim = new Person({ fName: 'Kim', age: 28 });




//  d(kim.__proto__)
//d(Function.prototype===Employee.__proto__)


function Employee(props){
    
    Employee.prototype.__proto__ = Person.prototype
    Person.call(this, props)
    this.pay = props.pay
}
 
// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee

Employee.prototype.paying = function(){
    l(`paying ${this.fName} ${this.pay} per houre! `)
}


const wolf = new Employee({fName:'wolf', age:48, pay: 100})
//  d(wolf)




export default Person;