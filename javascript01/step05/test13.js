/* 주제: 객체 - this 변수II
*/

"use strict"

function f1() {
  console.log(this)
}

var obj = {}
f1(obj)

console.log('------------------')


var obj = {
  f2 : function() {
    console.log(this)
  }
}
obj.f2()

f2()
