

class Animal{
    constructor(props){
   
        this.name = props.name
        this._energy = props._energy
        this.bark = props.bark
       
        
       
    
        
    }
    eat(param1) {
        
        this._energy = this._energy + param1
        console.log(` ${this._energy}`)
    }
    noise() {
        console.log(this.bark)
    } 
}


const leo = new Animal({name: 'leo', _energy: 10, bark: 'woof'})


// leo.eat(1)
// leo.noise()
// leo.eat(1)


const scripting = 'scripting'



export  default scripting