
const zip = Object.create({
    printZip(){
        l(this.zipCode)
    }
})

zip.zipCode = '48239';





const redford = Object.create(zip);
 redford.city = 'redford';





 ///////////////////////////////////////////////


 const phone = Object.create(redford)

    phone.phoneNum = '313-555-5555'


//phone.printZip()


const wolfObject = {
    firstName: 'wolf313',
    rating: 10,
   
  
  };

  Object.setPrototypeOf(wolfObject, phone);

//wolfObject.printZip()

const scripting = 'scipts';

export default scripting;
