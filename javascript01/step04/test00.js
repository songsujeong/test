"use strict"



var prompt = require('prompt'); //모듈 가져오기
prompt.start(); //시작

inputCommand() //호이스팅, 함수호출


function inputCommand(){
  prompt.get(['command'], function(err, result){   // 1번
    console.log(result.command);  //사용자에게 입력받아라, 보조작업자
    inputCommand();
  })
}
