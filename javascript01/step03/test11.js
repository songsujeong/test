/* 주제: 흐름 제어문 - 연습
    - 다음 소스를 변경하여 사용자로부터 숫자 a, b와 연잔사 op 값을 받아서
      계산 결과를 출력하는 프로그램을 작성하라.
    - 실행 결과:
    > node test11.js
    prompt: a: 10
    prompt: b: 20
    prompt: op: -
    계산결과:
    10 - 20 = -10
*/
"use strict"


var prompt = require('prompt'); //모듈 가져오기

prompt.start(); //시작

prompt.get(['a', 'b','op'], function(err, result) {
  var a = parseInt(result.a); // string --> number
  var b = parseInt(result.b); // string --> number
  var op = result.op;

console.log("계산결과 : ", a, op, b, "=");

switch (op) {
  case '-':
  console.log(a - b);
  break;
  case '+':
  console.log(a + b);
  break;
  case '*':
  console.log(a * b);
  break;
  case '/':
  console.log(a / b);
  break;
  case '%':
  console.log(a % b);
  break;

}



  // console.log('계산결과 : ');
  // console.log('a + b = ', a+b);
  // console.log('a - b = ', a-b);
  // console.log('a * b = ', a*b);
  // console.log('a / b = ', a/b);
  // console.log('a % b = ', a%b);
});
