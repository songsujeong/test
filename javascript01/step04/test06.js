/* 주제: 함수 - 익명 함수로 정의하기
*/

"use strict"


f1();


function f1() {
  console.log("okok");
}


var f2 = function() {
  console.log("익명함수....."); //변수선언만 끌어올려진다.
}

f2();
