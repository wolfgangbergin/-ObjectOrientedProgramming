'use strict';
import { lectures } from './lectures.js';
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

// const account = {
//   owner: 'wolf',
//   mov: [1, 2, 3, 400, 5, 600],
//   get latest() {
//     let [temp, ...rest] = this.mov.reverse()
//     return temp;
//   },
//   set latest(param1){
//     this.mov.push(param1)
//   }
// };
// account.latest = 7777
// l(account.latest);
/////////////////////////////////////////////////////////////////////////////////////////
const PersonProto = {
  testCCC: 'test',
  calcAge() {
    l(2023 - this.bYear)
    
  },
  init(fName, bYear){
    this.fName = fName;
    this.bYear = bYear;
    this.test = this._notStatic
  },
  set notStatic(param1){
    PersonProto._notStatic = param1
  },
 
};

 const steven = Object.create(PersonProto);

steven.name = 'steven';
steven.bYear = 1975;
//steven.__proto__ = PersonProto
// steven.calcAge()
// l(steven.__proto__ === PersonProto)
const sarah = {}
sarah.__proto__ = PersonProto
//const sarah = Object.create(PersonProto);  
sarah.notStatic = '55555'
 l(PersonProto)
 sarah.init('sarah', 1979)
// sarah.calcAge()
l(sarah)
/////////////////////////////////////////////////////////////////////////////////////////
