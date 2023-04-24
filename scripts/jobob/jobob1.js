

function Person(props){
    this.firstName = props.firstName

}

Object.defineProperty(Person.prototype, 'firstName', {
    get: function(){
        return this._firstName
    },
    set: function(param1){
        this._firstName = param1

    }
})


export {Person}