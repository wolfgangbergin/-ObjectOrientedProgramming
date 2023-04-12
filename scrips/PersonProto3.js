"use strict";
import { Student } from "./PresonProto2.js";


let kim = { fName: 'kim', bYear: '1999', computer: 'mac book', GPA: 3.9 }

function PassingStudent(props){
    Student.call(this, props)
    this.GPA = props.GPA
    
//Object.setPrototypeOf(PassingStudent.prototype, Student.prototype)
}



PassingStudent.prototype = Object.create(Student.prototype)

PassingStudent.prototype.constructor = PassingStudent

PassingStudent.prototype.logGAP = function(){
    l(this.GPA)
}

let kimp = new PassingStudent(kim)

// l(kimp)


export {kimp}