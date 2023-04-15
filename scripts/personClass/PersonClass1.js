'use strict';
const PersonClass = class {
  constructor(props) {
    this.fullName = props.fullName;
    this.bYear = props.bYear;
    this.age = props.bYear;

  }
  calcAge() {
    l(2023 - +this.bYear);
  }

  greet() {
    l(`Hay im ${this.fullName}`);
  }
  get age() {
    return 2023 - +this._bYear;
  }
  set age(param1) {
    this._age = 2023 - +param1;
  }
  get bYear() {
    return this._bYear;
  }

  set bYear(param1) {
    param1 > 1800 ? (this._bYear = param1) : alert(`${param1} is not valed!!!`);
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(param1) {
    param1.includes(' ')
      ? (this._fullName = param1)
      : alert(`${param1} is not a fullname!`);
  }
};

const kim = new PersonClass({ fullName: 'kim k', bYear: '1999', computer: 'macBook' });


const fla = 'fla';
export { fla, PersonClass };
