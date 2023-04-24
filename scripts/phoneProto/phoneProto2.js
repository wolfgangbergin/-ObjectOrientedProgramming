import { PhoneProto } from "./phoneProto1.js";

function CellPhone(props){
   PhoneProto.call(this, props)
   this._charge = props.charge
   CellPhone.prototype.__proto__  = PhoneProto.prototype
}















// CellPhone.prototype = Object.create(PhoneProto.prototype)



// CellPhone.prototype.construction = CellPhone






//CellPhone.prototype = Object.create(PhoneProto.prototype)

//  CellPhone.prototype.__proto__  = PhoneProto.prototype
// l(CellPhone.prototype.__proto__ === PhoneProto.prototype)
// CellPhone.prototype.constructor = CellPhone
//Object.setPrototypeOf(CellPhone.prototype, PhoneProto.prototype)

CellPhone.prototype.charge = function(param1){
   this._charge += param1
}

let wolfsPhone = new CellPhone({owner: 'wolfgang', charge: 55})


//  d(wolfsPhone)


// wolfsPhone.findPhone()
// wolfsPhone.charge(55)
// d(wolfsPhone)

// l(`///////////////////////////////////////////////`)


let scriptSeventySeven = 'scriptSeventyseven'

export {scriptSeventySeven}