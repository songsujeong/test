"use strict"



var prompt = require('prompt'); //모듈 가져오기
prompt.start(); //시작


var list =[ ["홍길동1", 100, 90, 80, 270, 90],
            ["홍길동2", 100, 90, 80, 270, 90],
            ["홍길동3", 100, 90, 80, 270, 90],
            ["홍길동4", 100, 90, 80, 270, 90] ]

 prompt.get(['command'], function(err, result){
   var command = result.command

   switch(command) {
     case "list":
     console.log("[학생 성적 목록]")
      for (var index in list) { //index는 여기서 선언해줌
      console.log(index + " : " + list[index]
    )}
      break;


      case "add":
      console.log("[학생 성적 입력]")

      prompt.get(['name', 'kor', 'eng', 'math'], function(err, result) {
        var name = result.name,
            kor = parseInt(result.kor),
            eng = parseInt(result.eng),
            math = parseInt(result.math),
            sum = parseInt(kor+eng+math),
            avg = parseInt(sum/3)


            console.log("성적");
            console.log(
              "이름: " + result.name,
              "국어: " + result.kor,
              "영어: " + result.eng,
              "수학: " + result.math,
              "합계: " + sum,
              "평균: " + avg)

              list.push([name, kor, eng, math, sum, avg])
              console.log(list);
      })
      break;

      case "delete":
      prompt.get(['no'], function(err, result) {
        var no = parseInt(result.no)
        list.splice(no, 1)


      })





  }
});
