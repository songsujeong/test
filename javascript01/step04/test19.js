/* 주제: 함수 - 함수 호출 동기 방식과 비동기 방식
*/

"use strict"


function f1() {
console.log("f1()..호출됨");
for (var i = 0; i < 10000000000; i++){
  var d = 3.1415792;
  var d2 = 3456.987;
  var result = d / d2;
}
}
f1()
console.log("hello~~");
