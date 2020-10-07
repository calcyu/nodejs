import {firstName,lastName} from './m1.mjs';

console.log(firstName, lastName);

//node --experimental-modules ./1modules/es6/main.mjs;

import {a as age,s as gender} from './m1.mjs';

console.log(age, gender);

//导入default的值
import w from './m1.mjs';
console.log(w);

//导入函数
import {f,bar} from './m2.mjs';
f();
bar();
