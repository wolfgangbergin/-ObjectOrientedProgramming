


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


const jobobsPhone = Object.create(testPhone)
// Object.setPrototypeOf(jobobsPhone, testPhone )
jobobsPhone.phoneInit({owner: 'jobob'})

// jobobsPhone.makeCall('313')
// d(jobobsPhone)



export {testPhone}