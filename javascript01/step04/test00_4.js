"use strict"



var prompt = require('prompt'); //모듈 가져오기

var studentList = [                         //계속 사용해야 하니까 미리 배열을 만들어둔다
  ['홍길동1', 100, 100, 100, 300, 100],
  ['홍길동2', 90, 90, 90, 270, 90],
  ['홍길동3', 80, 80, 80, 240, 80],
  ['홍길동4', 70, 70, 70, 210, 70],
  ['홍길동5', 60, 60, 60, 180, 60]
];


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
      for (var student of studentList) {
        console.log(student[0] + ": " +
          student[1] + ", " +
          student[2] + ", " +
          student[3] + ", " +
          student[4] + ", " +
          student[5]);
      }
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
