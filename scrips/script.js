'use strict';
import { lectures } from './lectures.js';
import { challenge2 } from './challengeTwo/carClass1.js';
import { wolfgang } from './PresonProto2.js';
 import { kimp } from './PersonProto3.js';
  import { wolfMan } from './CarProto2.js';
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
  
  calcAge() {
    l(2023 - this.bYear)
    
  },
  init(fName, bYear, zip){
    this.fName = fName;
    this.bYear = bYear;
    this.notStatic = zip;
  },
  set notStatic(param1){
    this._notStatic = param1
  },
  get notStatic(){
    return this._notStatic
  }
 
};

 const steven = Object.create(PersonProto);

steven.name = 'steven';
steven.bYear = 1975;
steven.__proto__ = PersonProto
//steven.calcAge()

const sarah = {}
sarah.__proto__ = PersonProto
// const sarah = Object.create(PersonProto);  


 sarah.init('sarah', 1979, 33133)


// l(sarah.notStatic)
// sarah.notStatic = 55655
// l(sarah.notStatic)
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
