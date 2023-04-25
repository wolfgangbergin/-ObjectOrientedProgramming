import { Employee } from "./micbob2.js";

d(Employee)


Employee.EmployeeMeth1('apple')
Employee.EmployeeMeth2('kimScript')
Employee.initEmployee.setBonus(1).setBonus(1).setBonus(1).setBonus(1)



const Boss = Object.create(Employee)

Boss.initBoss = function(props){
    this.initEmployee.call(this, props)
    this.computer = props.computer
}


const micbob = Object.create(Boss)

micbob.initBoss({pay: 15, firstName: 'micbob', computer: 'mac book'})




l(`///////////////////////////////////////////////`)
d(micbob)

l(`///////////////////////////////////////////////`)
// micbob.paying(5).paying(5).paying(5)





const scriptingSeventy = 'scriptingSeventy'


export {scriptingSeventy, }