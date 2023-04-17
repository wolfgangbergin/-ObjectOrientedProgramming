'use strict'
const micky = {firstName: 'micky', bYear: 1995, computer: 'macBook pro'}

import { wolf } from "./objectCreate1.js";

const student = Object.create(wolf.personCreate)

student.initStudent = function(props){
   
    this.initPersonCreate.call(this, props)
    this.computer = props.computer

}

student.intro = function(){
    l(`im ${this.firstName} and my sound is ${this.sound}`)
}

Object.defineProperty(student, 'computer', {
    get: function(){
        return this._computer
    },
    set: function(param1){
        this._computer = param1
    }
})


let co = 'co'

export { student}