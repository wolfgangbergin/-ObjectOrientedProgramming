import { Person, agedPerson } from "./maxbob1.js";

class Employee extends Person{
    constructor(props){
        super(props)
        this.pay = props.pay
       
    }
    testWolfAAA(){
        l('jhgkj')
    }
}







const maxbob = new Employee({firstName: 'maxbob212', pay: 15, apple: 'maxbob212', age: 48, phoneNumber: '313-255-7103', state: 'fla'});
const kimbob = new Employee({firstName: 'kimbob', pay: 15, apple: 'maxbob212', age: 22, phoneNumber: '313-255-7103', state: 'mich'});


// for (const key in maxbob.__proto__){
//     l(key)
// }

//  d( maxbob.__proto__.__proto__.__proto__.__proto__.__proto__)
// d(maxbob)


 const scripting = 'scripting'



export  default scripting