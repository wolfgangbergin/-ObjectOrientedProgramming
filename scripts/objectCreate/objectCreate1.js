'use strict'

const jobob = {firstName: 'jo bob', bYear: 1945}

const personCreate = {
    calcAge(){
        l(`${2023 - +this.bYear}`)
    },
    init(props){
     
        this.firstName = props.firstName,
        this.bYear = props.bYear,
        this.age = 2023 - +this.bYear,
        this.Zip = wolf._staticZip
    },
    get age(){
       return this._age
    },
    set age(param1){
      
        this._age = param1
    },
    get firstName(){
      return  this._firstName

    }, 
    set firstName(param1){
        this._firstName = param1
    },
    get bYear(){
      return  this._bYear

    }, 
    set bYear(param1){
        this._bYear = param1
    },
    get Zip(){
      return  this._Zip

    }, 
    set Zip(param1){
        this._Zip = param1
    },
   
  
}

const wolf = {

    personCreate: personCreate,
    staticZip: function(param1){
        this._staticZip = param1
    }
}

wolf.staticZip(48240)

// l(wolf)

// const jo = Object.create(wolf.personCreate)
// jo.init(jobob)
// l(jo)

// jo.init(jobob)










let michigan = 'michigan313'
 export {michigan, wolf, }