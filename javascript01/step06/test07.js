/*주제: exports 를 사용자가 다른 객체로 대체하기
*/
"use strict"

var m1 = require('./test07_m1.js') //. -> 현재폴더

console.log(m1.plus(10, 20));
console.log(m1.minus(10, 20));
console.log(m1.multiple(10, 20));
console.log(m1.divide(10, 20));
console.log('---------------------');

var {plus, minus} = require('./test07_m1.js')

console.log(plus(10, 20));
console.log(minus(10, 20));
