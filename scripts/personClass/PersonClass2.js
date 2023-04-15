'use strict';

import { PersonClass } from "./PersonClass1.js";

const firstStudent = { fullName: 'jojo jojo', bYear: '1999', computer: 'macBook', cell: 'iphone10' }

 class StudentClass  extends  PersonClass{
    constructor(props){
        super(props)
        this.computer = props.computer
        this.cell = props.cell
    }
    get computer(){
        return this._computer
    }
    set computer(param1){
        this._computer = param1
    }
    calcAge(){
        l('calcAge313')
    }
} 

Object.defineProperty(StudentClass.prototype, 'cell', {
    get: function (){
        return this._cell
    },
    set: function (param1){
        this._cell = param1
    }
})

const jojo = new StudentClass(firstStudent)





// l(jojo.cell)
// jojo.cell  = 'androidX'
// l(jojo.cell)
// l(jojo.computer)
// jojo.computer  = 'windows95'
// l(jojo.computer)
// jojo.calcAge()


export {jojo}