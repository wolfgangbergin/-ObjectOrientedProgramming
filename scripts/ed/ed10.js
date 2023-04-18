'use strict'


const creditAcc = function(props){
    this.interestRate = creditAcc.creditCardIntrest
}

Object.defineProperty(creditAcc, 'creditCardIntrest', {
   get: function(){
        return this._creditCardIntrest
    },
    set: function(param1){
        this._creditCardIntrest = param1
    }
})



Object.defineProperty(creditAcc.prototype, 'interestRate', {
    get: function (){
        return this._interestRate
    },
    set: function (param1){
        this._interestRate = param1
    }
})

Object.defineProperty(creditAcc.prototype, 'creditCard', {
    get: function (){
        return this._creditCard
    },
    set: function (param1){
        this._creditCard = param1
    }
})


creditAcc.creditCardIntrest = .33



let ed = new creditAcc({banana: 'banana'})


ed.creditCard = [212]

l(ed)















const scripts = `scripts`

export {scripts}