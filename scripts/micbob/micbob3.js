import { Employee } from "./micbob2.js";

// d(Employee)


// Employee.EmployeeMeth1('apple')
// Employee.EmployeeMeth2('kimScript')
Employee.initEmployee.setBonus(1).setBonus(1).setBonus(1).setBonus(1)



const Boss = Object.create(Employee)

Boss.initBoss = function(props){
    let privetProp2 = '212'
    this.initEmployee.call(this, props)
    this.computer = props.computer
    this.test212 = privetProp2
}


const micbob = Object.create(Boss)

micbob.initBoss({pay: 15, firstName: 'micbob', computer: 'mac book'})




//  d(micbob)







const scriptingSeventy = 'scriptingSeventy'


export {scriptingSeventy, }