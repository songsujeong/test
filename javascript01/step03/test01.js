/* 주제: 사용자에게서 입력 받기
*/

"use strict"

var prompt = require('prompt'); //모듈 가져오기

prompt.start(); //시작

prompt.get(['name', 'tel'], function(err, result) {
  console.log('입력결과 : ');
  console.log('이름 = ', result.name); //이름은 result라는 상자에 name으로 들어있다.
  console.log('전화 = ', result.tel);
});
