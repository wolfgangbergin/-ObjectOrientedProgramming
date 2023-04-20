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
     //– Account.#AAAtest1('staticTest1')
      
  }

  deposit(val) {
    this.#movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

 
  requestLoan(val, param2) {
    
    if (this.#approveLoan(param2)) {
      l(`your loan of ${val} was approved.`);
      this.deposit(val);
      return
    }
    l(`your loan of ${val} was Denied :-(!!!`);
  }
 static #AAAtest1(param1) {
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
   
    return val;
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


wolfg.requestLoan('717', 0.1)


l(wolfg.getMovements())


const script = ['script', 'scrips', `scripting`]
export default script
