/* 주제: 객체 - 일반 객체와 함수 객체
*/

"use strict"

var obj1 = {
  name: '홍길동',
  age: 20
}
obj1.tel = '111-1111'
obj1.f1 = function() {console.log('hello')}
obj1.ok = {}



var obj2 = function() {
  console.log('test..')
}
obj2.tel = '222-2222'
obj2.f1 = function() {console.log('hi')}
obj2.ok = {}



obj2()
