/* 주제: a와 b값을 입력 받아서 +, -, *, /, % 를 계산하는 프로그램
*/

"use strict"

var prompt = require('prompt'); //모듈 가져오기

prompt.start(); //시작

prompt.get(['a', 'b'], function(err, result) {
  var a = parseInt(result.a); // string --> number
  var b = parseInt(result.b); // string --> number


  console.log('계산결과 : ');
  console.log('a + b = ', a+b);
  console.log('a - b = ', a-b);
  console.log('a * b = ', a*b);
  console.log('a / b = ', a/b);
  console.log('a % b = ', a%b);
});
