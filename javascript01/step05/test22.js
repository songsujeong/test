/* 주제: 객체 - 객체에 함수를 등록하는 또 다른 방법
*/

"use strict"

var obj = {
  plus: function(a, b) {return a + b},
  minus: function(a, b) {return a - b},
  multiple: function(a, b) {return a * b},
  divide: function(a, b) {return a / b}
}


var obj2 = {
  plus(a, b) {return a + b},
  minus(a, b) {return a - b},
  multiple(a, b) {return a * b},
  divide(a, b) {return a / b}
}

console.log(obj.plus(10, 20));
