import {Person} from './jobob1.js'






const Employee = function(props){
    Employee.prototype.__proto__ = Person.prototype
    Person.call(this, props)
    this.payRate = props.payRate

}

// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee



const jobob = new Employee({firstName: 'jobob', payRate: 15})




d(jobob)
d(jobob.firstName)
jobob.firstName = "wolfMan"
d(jobob)
d(jobob.firstName)

const constructor = 'constructor'

export {constructor}