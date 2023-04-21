'use strict';

class Account {
  //public
  locale = navigator.language;
 

  //privit
  #movements = [];
  #pin;
  static #privateStaticFieldWithInitializer = 'detroit';
  static #count = 0;

  constructor(props) {
    (this.owner = props.owner),
      (this.currency = props.currency),
      (this.#pin = props.pin),
      // this.locale = navigator.language;
      // this.#movements = [];
      (this.wolfTest = this.locale);
   
    //– Account.#AAAtest1('staticTest1')
  
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val, param2) {
    if (!this.#approveLoan(param2)) return;

    l(`your loan of ${val} was approved.`);
    this.deposit(val);
  }
  static #AAAtest1(param1) {
    l(param1);
  }

  getMovements() {
    return this.#movements;
  }
  get pin() {
    return this.#pin;
  }
  set pin(param1){
    this.#pin = param1
  }

  #approveLoan(val) {
    l(val);
    if (!val) return l(`your loan of ${val} was Denied :-(!!!`);

    return true;
  }
  static get City(){
    return Account.#privateStaticFieldWithInitializer
  } 

  static  set City(param1){

    Account.#privateStaticFieldWithInitializer = param1
  }

  static get count3(){
    return Account.#count
  } 

  static   count2(param1){

    Account.#count++
    return Account
  }
}



let wolfg = new Account({
  owner: 'wolfgang bergin',
  currency: 'USD',
  pin: 1234,
  city: 'redford',
});

Account.count2().count2().count2().count2().count2().count2().count2().count2()
l(Account.count3)



const script = ['script', 'scrips', `scripting`];
export default script;
