import { testPhone } from "./phone.js";


const cellPhone = Object.create(testPhone)
 
cellPhone.cellPhoneInit = function(props){
    this.phoneInit.call(this, props)
    this._battery = props.battery
    return this
}

cellPhone.chargeBattery = function(param1){
    this._battery += param1
    l(`charging ${this.owner}'s phone to ${this._battery}%`)
    return this
}


const scripting = 'scripting';

export {  scripting, cellPhone };
