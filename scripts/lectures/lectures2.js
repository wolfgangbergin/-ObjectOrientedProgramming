'use strict';


let zip = {zip: {value: 48240, writable: true, enumerable: true, configurable: true}}
const call ={
    call(number){
        l(`calling ${number}`)
    }
}

const iphone = {phone: 'iphone10', phoneNum: '414-414-4141'}

Object.setPrototypeOf(iphone, call)


const phone = {phone: {value: iphone, writable: true, enumerable: true, configurable: true},
phoneNum: {value: '313-313-3131', writable: true, enumerable: true, configurable: true}}




let obj = {
  nickName: 'micky',
};

const obj2 = Object.create(obj,   zip  );

//d(obj2)

const obj3 = Object.create(obj2, {
  canBoogie: {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});


const obj4 = Object.create(obj3, phone);



const scripting = 'scripting';
export { scripting, obj4 };
