"use strict"

var prompt = require('prompt')
prompt.start()

InputCommand()

function InputCommand() {
prompt.get(['command'], function(err, result) {
  if(result.command == 'quit') {
    console.log("안녕히가세요!")
    return;
  }
  InputComman();
})
}
