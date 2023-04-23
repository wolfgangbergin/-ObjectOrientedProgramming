


const testPhone = {
 phoneInit(props){
    (this.owner = props.owner) 
    return this
 },

 makeCall(phoneNum) {
    l(`calling number ${phoneNum} from ${this.owner}'s cell!`);
    return this
  },
}




export {testPhone}