function Person(props) {
  this.fName = props.fName;
  this.age = props.age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my Name is ${this.fName} and I am ${this.age} years old.`);
}

Person.prototype.printAge = function(){
l(this.age)
}


export {Person}

