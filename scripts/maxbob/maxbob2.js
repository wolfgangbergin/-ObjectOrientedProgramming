import { Person, agedPerson } from "./maxbob1.js";

class Employee extends Person{
    constructor(props){
        super(props)
        this.pay = props.pay
    }
}




const maxbob = new Employee({firstName: 'maxbob212', pay: 15, apple: 'maxbob212', age: 48})





 const pp2 = new maxbob.__proto__.constructor({firstName: 'pp2', pay: 15, apple: 'ppp2', age: 18})



 //d(maxbob)
 



 const pp3 = { fla: "fla"}
  pp3.testjobob1 = maxbob.testjobob1
  pp3.testjobob2 = maxbob.testjobob2
  
//   pp3.testjobob1()
//   pp3.testjobob2()
 
const scripting = 'scripting'



export  default scripting