/* 주제: 함수 - arrow function
*/

"use strict"


var f1 = function() {
  console.log("익명함수....."); //변수선언만 끌어올려진다.
}


var f2 = () => { console.log("Arrow 함수") } //JavaScript는 이전문장과 다음문장을 구분할 수 있다면 세미콜론 ; 을 붙이지 않아도된다.

var f3 = () => console.log("Arrow 함수2"); //문장이 한개 일 때 {} 생략 가능

f1();
f2();
f3();
