import { Person } from "./maxbob1.js";

class Employee extends Person{
    constructor(props){
        super(props)
        this.pay = props.pay
    }
}




const maxbob = new Employee({firstName: 'maxbob212', pay: 15, apple: 'apple313'})


l(maxbob.__proto__.__proto__.__proto__ === Object.prototype)

// d(Employee.__proto__.__proto__ === Function.prototype)
// l(maxbob.__proto__ === Employee.prototype)
//   l(Object.prototype.isPrototypeOf(maxbob))
//   d(Employee.__proto__ === Person)


//d(Employee.__proto__)

// l(Object.prototype.isPrototypeOf(maxbob))

// l(`///////////////////////////////////////////////`)
// l(Employee.__proto__.isPrototypeOf(Person))
const scripting = 'scripting'



export  default scripting