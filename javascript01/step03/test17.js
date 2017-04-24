/* 주제: 흐름 제어문 - 연습
 - 구구단을 출력하는 프로그램을 작성하시오.
 > node test17.js
 propmpt: step: 5
 5 * 1
...
5 * 9
*/

"use strict"

var prompt = require('prompt'); //모듈 가져오기

prompt.start(); //시작

prompt.get(['step'], function(err, result) {
  var step = result.step; // string --> number
  // var b = parseInt(result.b); // string --> number

  for (var i = 1; i<=9; i++)
    console.log(step + "*" + i + " = " + (step * i));


});
