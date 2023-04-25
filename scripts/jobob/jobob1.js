let testFunc3 = function (param1) {
  l(`${param1} ${banana}`);
};

function Person(props) {
    let staticFunc5 = function(param1){
        
        return param1
    };

  (this.firstName = props.firstName),
    (this.testFunc1 = function (param1) {
      
    }),
    (this.testVal2 = Person.staticVal5),
    (this.testVal3 = staticFunc5('scripting'));
}
///////////////////////////////////////////////
Person.static2 = '222'

Object.defineProperty(Person, 'staticFunc4',{
    value: function(param1){
       
 this.staticVal5 = param1
    }
} )
///////////////////////////////////////////////
Object.defineProperty(Person.prototype, 'firstName', {
  get: function () {
    return this._firstName;
  },
  set: function (param1) {
    this._firstName = param1;
  },
});



export { Person };
