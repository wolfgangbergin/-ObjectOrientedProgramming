'use strict'
const micky = {firstName: 'micky', bYear: 1995, computer: 'macBook pro'}

import { wolf } from "./objectCreate1.js";

const student = Object.create(wolf.personCreate)

student.init = function(props){
   
   wolf.personCreate.init.call(this, props)
    this.computer = props.computer

}

Object.defineProperty(student, 'computer', {
    get: function(){
        return this._computer
    },
    set: function(param1){
        this._computer = param1
    }
})

const mick = Object.create(student)

mick.init(micky)

// l(mick)
// mick.computer = 'windows98'
// l(mick.computer)
let co = 'co'

export {co}