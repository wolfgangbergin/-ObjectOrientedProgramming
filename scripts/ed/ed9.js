'use strict'


const Customer = function(props){
    this.firstName = props.firstName
    
}

Object.defineProperty(Customer.prototype, 'firstName', {
    get: function(){
        return this._firstName
    },
    set: function(param1){
        l('test313')
        this._firstName = param1
    }   
})  







export {Customer}