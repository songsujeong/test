"use strict"

var prompt = require('prompt');

prompt.start();
prompt.get(['a','b','op'],function(err,result){
  var a = parseInt(result.a);
  var b = parseInt(result.b);
  var op = result.op;

  console.log("계산결과 : ");

  switch (op) {
    case '+':
      console.log(a+op+b+"="+(a+b));
      break;


  }



}
)
