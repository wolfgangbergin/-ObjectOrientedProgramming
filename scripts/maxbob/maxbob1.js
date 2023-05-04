

const phone = {
  phoneInit(props){
     
      this.phoneNumber = props.phoneNumber
     this.state = props.state
  },

  printPhone(){
      l(this.phoneNumber)
  },

  kimMetcAAA(){
    l('kimMeth')
  }


}





const testObj = Object.create(phone)








function agedPerson(props) {
  testObj.phoneInit.call(this, props)
  this.age = props.age;
}

Object.setPrototypeOf(agedPerson.prototype, testObj)

agedPerson.prototype.printAge = function () {
  l(this.age);
};

class Person extends agedPerson {
  static #wolf;

  constructor(props) {
    super(props),
      (this.firstName = props.firstName),
      (Person.wolf = props.apple),
      (this.testWolf = Person.#wolf),
  
      this.testjobob1 = () => {
  
        l(`testjobob ${this.firstName} ${this.state}`);
        l(this)
     
      };
  }


  testjobob2(){
  
    l(`testjobob ${this.firstName} ${this.state}`);
    l(this)
    
  };

  static get wolf() {
    return Person.#wolf;
  }
  static set wolf(param1) {
    Person.#wolf = param1;
  }

  greet() {
    l(`hi im ${this.firstName}`);
  }
}




export { Person, agedPerson };
