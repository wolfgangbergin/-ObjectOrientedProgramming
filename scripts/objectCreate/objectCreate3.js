'use strict';
import {student} from '../objectCreate/oblectCreate2.js';


import { obj4 } from '../lectures/lectures2.js';

import {cat} from '../lectures/lectures1.js';







Object.setPrototypeOf(obj4, student)


Object.setPrototypeOf(cat, obj4)




const kimsCat = Object.wolfCreate(cat)





kimsCat.initCat({sound: 'lollol',  firstName: 'scripts', computer: 'windows3.1', bYear: 1000, })







// l(kimsCat)
// kimsCat.makeSound()
// kimsCat.intro()
// kimsCat.calcAge()
// kimsCat.phone.call(99999999)







const annArbor = 'Ann Arbor';
export {annArbor, cat};