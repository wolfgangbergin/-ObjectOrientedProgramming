const redford ={
    city: 'redford',
}

const kimObject = {
  firstName: 'kim248',
  age: 22,
  kimFunc1() {
    l(this.firstName);
  },
  kimFunc2() {
    let banana313 = 'banana';
    
   return () => {
      l(this.firstName);
    };
  },
};




const wolfObject = {
    firstName: 'wolf313',
    rating: 10,
    wolfFunc1: kimObject.kimFunc1,
    wolfFunc2: kimObject.kimFunc2(),
  
  };

  const button = document.querySelector("#btn");

  button.addEventListener("click", wolfObject.wolfFunc2);


Object.setPrototypeOf(wolfObject, {
    ...redford,
    printRating() {
        l(`${this.firstName} ${this.rating}`);
        },
});  

 l(Object.getPrototypeOf(wolfObject))

  wolfObject.printRating()

const scripting = 'scipts';

export default scripting;
