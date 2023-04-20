'use strict'


const Customer = function(props, Child){
   
 Object.setPrototypeOf(Child.prototype, Customer.prototype)
    this.firstName = props.firstName

    
    
}

Object.defineProperty(Customer.prototype, 'firstName', {
    get: function(){
        return this._firstName
    },
    set: function(param1){
     
        this._firstName = param1
    }   
})  







export {Customer}