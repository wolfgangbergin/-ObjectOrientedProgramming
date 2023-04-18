'use strict'

import 


const CreditAcc = function(props){
    this.banana = 'banana'
    this.firstName = props.firstName
    this.interestRate = CreditAcc.creditCardIntrest
    this.testFun313 = function(){
        l('testFunc313')
    }
}




Object.defineProperty(CreditAcc, 'creditCardIntrest', {
   get: function(){
        return this._creditCardIntrest
    },
    set: function(param1){
        this._creditCardIntrest = param1
    }
})



Object.defineProperty(CreditAcc.prototype, 'interestRate', {
    get: function (){
        return this._interestRate
    },
    set: function (param1){
        this._interestRate = param1
    }
})

Object.defineProperty(CreditAcc.prototype, 'creditCard', {
    get: function (){
        return this._creditCard
    },
    set: function (param1){
        this._creditCard = param1
    }
})


CreditAcc.creditCardIntrest = .33

CreditAcc.prototype.prototype = Object.create({})

let ed = new CreditAcc({banana: 'banana', firstName: 'Ed'})


ed.creditCard = [212]



 d(ed)













const scripts = `scripts`

export {scripts}