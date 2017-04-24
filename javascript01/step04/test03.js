/* 주제: 함수 - 함수 호이스팅(hoisting)
*/

"use strict"

name = "홍길동";

var name;


f1();


function f1() {
  console.log("f1() 호출됨");
}

f1();
