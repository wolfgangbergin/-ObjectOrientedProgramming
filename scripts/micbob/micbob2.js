import { PersonObj } from "./micbob1.js";


const Employee = Object.create(PersonObj, {
    'EmployeeMeth2':{
         value: function(param1){
           Employee.employeeTestProp1 = param1
            l(param1)
        }
    }
})

Employee.initEmployee = function(props){
  

    let PrivateVal1 = props.pay + Employee.initEmployee.bonus
    let PrivateVal2 =  Employee.employeeTestProp1
    this.initPerson.call(this, props)
    this.pay = PrivateVal1,
    this.TestProp2 = PrivateVal2
} 

Employee.initEmployee.bonus = 0

Employee.initEmployee.setBonus = function(param1) {
  
    Employee.initEmployee.bonus += param1
    return this
} 



Employee.paying = function(param1){
    this.pay += param1
    l(`paying ${this.firstName} ${this.pay}`)
    return this
}



Object.defineProperty(Employee, 'EmployeeMeth1', {
    value: function(param1){
        l(param1)
       
    }
})


const scriptingSeventy = 'scriptingSeventy'


export {scriptingSeventy, Employee}