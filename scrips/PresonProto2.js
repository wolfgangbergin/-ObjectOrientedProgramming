"use strict";
import banana from "./PersonProto1.js";
let wolf = { fName: 'wolfgang', bYear: '1999', computer: 'mac book' }




let Student = function(props){
    Person.call(this, props)
    this.computer  = `${props.computer} pro!`
    //Object.setPrototypeOf(this, new Person(props))
};



 Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
    l(this.computer)
}


Object.defineProperty(window.Person.prototype, "testWolf", {
    get: function testWolf(){
        l('313')
        return  this.computer
    }
})

let wolfgang = new Student(wolf)
d(wolfgang)


// d(Student.prototype.constructor)
// d(Student.prototype)

export {wolfgang}