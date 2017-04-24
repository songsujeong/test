/* 주제: 함수 - 함수를 파라미터로 넘기기
*/

"use strict"

function plus(a, b) {
  return a + b;
}


function minus(a, b) {
  return a - b;
}


//함수(주소)를 받을 수 있다.
function caller(cb) {
  var value = cb(20, 30);
  console.log(value);
}


//함수(주소)를 넘길 수 있다.
caller(plus);
caller(minus);
