"use strict"



var prompt = require('prompt'); //모듈 가져오기
prompt.start(); //시작

inputCommand() //호이스팅, 함수호출


function inputCommand(){
  prompt.get(['command'], function(err, result){   // 1번
    if (result.command == 'quit') {  //만약 'quit'를 받으면
      console.log('안녕히 가세요!');
      return;                     //종료해라
    }                            //두 문장이상 {}로 묶기
    inputCommand();
  })
}
