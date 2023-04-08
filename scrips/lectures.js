'use strict';
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////




const PersonClass  = class  {

  constructor(props){
   
   this.testWolf = PersonClass._testStatic 
   this.fullName = props.fullName;;
   this.bYear = props.bYear;
   this.age = props.bYear;
 
  
  }


  greet(){
   
    l(`Hay im ${this.fullName}`)
  }
  get age(){
    return 2023 - +this._bYear
   
  }
 set age(param1){
   this._age = 2023 - +param1
 }
 get bYear(){
  return this._bYear
 }

 set bYear(param1){
  param1 > 1800 ?  this._bYear = param1 : alert(`${param1} is not valed!!!`)
 }

 get fullName(){
  return this._fullName
 }

  set fullName(param1){
   param1.includes(' ')? (this._fullName = param1): alert(`${param1} is not a fullname!`)
  
  }
  set testWolf(param1){
    this._testWolf = param1
    this._BBB = param1
  }
static set testStatic(param1){
  PersonClass._testStatic = param1
}
 
}


let jojo = new PersonClass({ fullName: 'jojo jonson', bYear: '1899',  });

PersonClass.testStatic = '616'

const kim = new PersonClass({ fullName: 'kim k', bYear: '1999',  })
// l(PersonClass)
// l(jojo)
// l(kim)



/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
const lectures = 'lectures';
export { lectures };
