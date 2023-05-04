const person = {
  name: 'kim',
  age: 28,
  greet() {
    l(`hi im ${this.name}`);
  },
};

Object.defineProperty(person, 'greet', {
    enumerable: 0,
    configurable: 0,
    writable: 0,
});

Object.defineProperty(person, 'name', {
    writable: 1,
    enumerable: 0,
    configurable: 0,
    value: person.name,
})


person.name = 'kimey'
//delete person.name
//d(Object.getOwnPropertyDescriptors(person));

// for (const [key, value] of Object.entries(person)) {
//     l(`${key}: ${value}`);
//     };
// d(window)
// l('wolf313')
const scripting = 'scipts';

export default scripting;
