'use strict';




window.testC = 'testC'




const Person = function(props){
    this.name = props.name,
    this.age = props.age,
    this.greeting = function(){
        l(`HI I'M ${this.name} and I am ${this.age} years old`)
    }

}



window.kim = new Person({name: 'kim313', age: '17'})






const lectures = 'lectures'



export { lectures, }