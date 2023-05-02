const zip = Object.create({
  printZip() {
    l(this.zipCode);
  },
});

zip.zipCode = '48239';

// const redford ={
//     city: 'redford',
//      ...zip
// }

const redford = Object.create(zip);
redford.city = 'redford';

//d(redford)
//redford.printZip()

///////////////////////////////////////////////
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

const button = document.querySelector('#btn');

button.addEventListener('click', wolfObject.wolfFunc2);

Object.setPrototypeOf(wolfObject, redford);


const tempObj = Object.create(redford, {
  testjojo: {
    value: function () {
      l(`paying ${this.firstName} ${this.salary} per houre! `);
    },
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

tempObj.salary = '150';

Object.defineProperty(tempObj, 'printRating', {
  value: function () {
    l(`${this.firstName} ${this.rating}`);
  },
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.setPrototypeOf(wolfObject, tempObj);

// d(wolfObject);
// wolfObject.testjojo();
// wolfObject.printRating();
// wolfObject.printZip();




const scripting = 'scipts';

export default scripting;
