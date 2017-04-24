"use strict"



var prompt = require('prompt'); //모듈 가져오기
prompt.start(); //시작

inputCommand() //호이스팅, 함수호출


function inputCommand(){
  prompt.get(['command'], function(err, result){   // 1번
    switch (result.command){
    case 'quit':
      console.log('안녕히 가세요!');
      return;                         //함수를 완전히 끝낸다
    case 'list':
      console.log('[학생 성적 목록]')
      break;                         //명령문을 끝내고 다른 명령문을 실행한다
    case 'add':
      console.log('[학생 성적 입력]')
      break;
    case 'delete':
      console.log('[학생 성적 삭제]')
      break;
    default:
      console.log('해당 명령은 지원하지 않습니다.')
    }
    inputCommand();
  })
}
