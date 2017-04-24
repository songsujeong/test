"use strict"

var prompt = require('prompt')
prompt.start


InputCommand()

function InputCommand() {
  prompt.get(['command'], function(err, result) {
    switch ('command') {
      case 'quit':
        console.log('안녕히가세요!')
        return
      case 'list':
        console.log('[성적 목록]')
        break
      case 'add':
        console.log('[성적 입력]')
        break
      default:

    }
  })
}
