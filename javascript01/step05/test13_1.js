/* 주제: 객체 - this 변수의 활용
*/

"use strict"

/*
var obj2 = {}
obj2.v1 = 0
obj2.f1 = function() {
  v1 = 100
}*/


var obj = {
  v1: 0,
  f1: function() {
    this.v1 = 100
  }
}

obj.f1() //obj라는 객체주소를 찾아감
console.log(obj.v1);
console.log('------------------------')
