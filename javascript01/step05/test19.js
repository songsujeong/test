/* 주제: 객체 - read only 프로퍼티 만들기
*/

"use strict"

var obj = {}
obj.result = 10;


Object.defineProperty(obj, 'result2', {  //defineProperty: property를 정의하라
  value: '100'
})

console.log(obj.result)
console.log(obj.result2)
console.log('---------------------------');

obj.result = 20
console.log(obj.result)

obj.result2 = 200
console.log(obj.resul2)
