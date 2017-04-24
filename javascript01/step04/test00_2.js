"use strict"



var prompt = require('prompt'); //모듈 가져오기
prompt.start(); //시작

inputCommand() //호이스팅, 함수호출


function inputCommand(){
  prompt.get(['command'], function(err, result){   // 1번
    if (result.command == 'quit') {  //만약 'quit'를 받으면
      console.log('안녕히 가세요!');
      return;
    } else if (result.command == 'list') {
      console.log('[학생 성적 목록]')
    } else if (result.command == 'add') {
      console.log('[학생 성적 입력]')
    } else if (result.command == 'delete') {
      console.log('[학생 성적 삭제]');
    }
    inputCommand();
  })
}
