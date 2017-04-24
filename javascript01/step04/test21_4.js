"use strict"

var prompt =require('prompt')
prompt.start

InputCommand()

function InputCommand() {
prompt.get(['command'], function(err, result) {
  switch(result.command) {
    case 'quit':
      console.log("안녕히가세요!")
      return;
    case 'list':
      console.log('[학생 성적 목록]')
      break
    case 'add':
      console.log('[학생 성적 입력]')
      break
    case 'delete':
      console.log('[학생 성적 삭제]')
      break
    default:
    console.log('해당 명령은 지원하지 않습니다');  
  }
  InputCommand()
})

}
