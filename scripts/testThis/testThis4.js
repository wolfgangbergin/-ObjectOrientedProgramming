
const testObj = {}

const jojo = Object.create(testObj)

testObj.testFunc = function(){
    l(this)
    let business = {bName: 'action212'}
    let apple = 'apple212';
      let banana = 'banana212'
 
    const wolfArrow = param1 => {
        l('wolfArrow')
    l(` ${jojo.banana} and ${apple} and ${business.bName}`);
    l(jojo.name)
    };
   
    return wolfArrow

}



testObj.payPerson = ()=>{
    let banana = 'banana'
    //l(`paying ${this.salary} to ${this.name}`)
    l('wolfMan')
    l(banana)
}





testObj.greet = function(){
    l(`hi im ${this.name}`)  
}


Object.defineProperty(testObj, 'salary', {
value: '150',
writable: 0,
})




const max = Object.create(testObj)


jojo.name = 'jojo'
jojo.banana = 'banana515jojo'
max.name = 'max'
max.banana = 'banana515max'





// let temp = max.testFunc()
//  temp()




const scripting = 'scipts';

export default scripting;