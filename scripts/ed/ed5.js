'use strict';

class Account {
  //public
  locale;
 

  //privit
  #movements = [];
  #pin;
  static #city = 'detroit313';
  static #count = 0;
 static #wolfTest;
  constructor(props) {
    (this.owner = props.owner),
      (this.currency = props.currency),
      (this.#pin = props.pin),
       this.locale = Account.#city;
      // this.#movements = [];
      (this.wolfTest = this.locale);
    Account.#wolfTest = props.owner
    //– Account.#AAAtest1('staticTest1')
  
  }

  deposit(val) {
    this.#movements.push(val);
    return this
  }
  withdraw(val) {
    this.deposit(-val);
    return this
  }

  requestLoan(val, param2) {
    if (!this.#approveLoan(param2)) return;

    l(`your loan of ${val} was approved.`);
    this.deposit(val);
    return this
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
 get City(){
    return Account.#city
  } 

   set City(param1){

    Account.#city = param1
  }

  static get count3(){
    return Account.#count
  } 

  static   count2(param1){

    Account.#count++
    return Account
  }
  wolfLog(){
    l(this.owner)
    return this
  }
}



let wolfg = new Account({
  owner: 'wolfgang bergin',
  currency: 'USD',
  pin: 1234,
  
});


// wolfg.deposit(99).deposit(999).withdraw(100).requestLoan(1000, true)



// l(wolfg.City)

const script = ['script', 'scrips', `scripting`];
export default script;
