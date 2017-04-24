/*주제: 모듈 만들기
*/
"use strict"

//require(모듈경로) => module 객체에 보관된 exports 객체를 리턴

var m1 = require('./test06_m1.js') //. -> 현재폴더

console.log(m1.plus(10, 20)); //m1 <= module.exports 객체를 가리킨다
console.log(m1.minus(10, 20));
console.log(m1.multiple(10, 20));
// console.log(m1.divide(10, 20));
