import { cellPhone } from "./cell.js";


const carPhone = Object.create(cellPhone)

carPhone.carPhoneInit = function(props){
    this.cellPhoneInit.call(this, props)
    this._number = props.number
    return this
}

carPhone.findPhone = function(){
    l(`finding ${this.owner} phone!!!`)
    return this
}

const kimsCarPhone = Object.create(carPhone)


 
 


export { kimsCarPhone };
