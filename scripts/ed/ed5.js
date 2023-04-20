'use strict';

class Account {
  //public
  locale = navigator.language;
  _city = `annArbor`
 
  //privit
  #movements = [];
 #pin
  constructor(props) {
    (this.owner = props.owner),
      (this.currency = props.currency),
      (this.#pin = props.pin),
      // this.locale = navigator.language;
      // this.#movements = [];
      (this.wolfTest = this.locale),
      (this.city = props.city);
      Account.#AAAtest1('staticTest1')
      
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

 
  requestLoan(val) {
    if (this.#approveLoan()) {
      l(`your loan of ${val} was approved!!!`);
      this.deposit(val);
    }
  }
 static #AAAtest1(param1) {
     l(param1);
  }
 static AAAtest2(param1) {
     l(param1);
  }
  getMovements(){
    return this.#movements
  }
  get pin(){
    return this.#pin
  }
  // set pin(param1){
  //   this.#pin = param1
  // }

  #approveLoan(val) {
    l('approveLone')
    return true;
  }

}

// Object.defineProperty(Account.prototype, 'movements', {
//   get: function () {
//     return this.#movements;
//   },
// });

let wolfg = new Account({
  owner: 'wolfgang bergin',
  currency: 'USD',
  pin: 1234,
  city: 'redford',
});

wolfg.deposit(919);
wolfg.withdraw(919);

//l(wolfg.#movements);
// d(wolfg.city);
// l(wolfg._city);
 //d(wolfg)
// l(wolfg.getMovements())
// l(wolfg.pin)
// wolfg.requestLoan('919')


Account.AAAtest2('staticTest2')


const script = ['script', 'scrips', `scripting`]
export default script
