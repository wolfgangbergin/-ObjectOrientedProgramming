

class WolfSet extends Set{
    static #_kimTest
     constructor(param1, ...props){
        
         super(...props)
  this.#kimTest = param1
 
     }
   
 
    set #kimTest(param1){
     WolfSet.#_kimTest = param1
     }
     get kimTest(){
      return WolfSet.#_kimTest
     }
 }
 
 
 
 
 
 
 
 
 
 const set = new WolfSet('banana212',[1,2,3,4,5,6,7,8,9,10])
 
 
 
 
//  l(set.kimTest)
 
//  d(set.__proto__ === WolfSet.prototype)
//  l(`///////////////////////////////////////////////`)
 const scripting = 'scripting'



export  default scripting