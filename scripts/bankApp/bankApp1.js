'use strict';

class Account {
  constructor(props) {
    (this.owner = props.owner),
      (this.currency = props.currency),
      (this.pin = props.pin);
    this.locale = navigator.language;

    this._movements = [];
  }

  get _move() {
    return this._movements;
  }
  set _move(param1) {
    this._movements.push(param1);
  }
  deposit(val) {
    this._move = val;
  }
  withdraw(val) {
    this._move = -val;
  }

  approveLoan(val){
    return true;
  }
  requestLoan(val){
    if(this.approveLoan() ){
        this.deposit(val)
        l(`your loan of ${val} was approved!!!`)
    }
   
  }
   testEd(props){
    this._testEd = props.testEd
   }

}

let wolfg = new Account({
  owner: 'wolfgang bergin',
  currency: 'USD',
  pin: 1234,
});

// wolfg.deposit(99);
// wolfg.withdraw(99);

// l(wolfg._move);
// wolfg.requestLoan(1000)

// l(wolfg.approveLoan(999))
// l(wolfg);
//  l(Account)
// l(Account.prototype === wolfg.__proto__)


const script = 'script';
export { script, Account };
