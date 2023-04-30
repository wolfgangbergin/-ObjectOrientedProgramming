// class agedPerson{
//  printAge(){
//   l(this.age)
//  }

// }

function agedPerson(props) {
  this.age = props.age;
}
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
  
      this.testjobob1 = function()  {
  
        l(`testjobob ${this.firstName} ${this.fla}`);
        l(this)
     
      };
  }


  testjobob2 = () => {
  
    l(`testjobob ${this.firstName} ${this.fla}`);
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
