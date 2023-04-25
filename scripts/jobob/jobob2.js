import {Person} from './jobob1.js'



Person.staticFunc4(707)



const Employee = function(props){
    Employee.prototype.__proto__ = Person.prototype
    Person.call(this, props)
    this.payRate = props.payRate

}

// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee



const jobob = new Employee({firstName: 'jobob', payRate: 15})



// l(`///////////////////////////////////////////////`)
// d(jobob)
// jobob.testFunc1('apple')

const constructor = 'constructor'

export {constructor}