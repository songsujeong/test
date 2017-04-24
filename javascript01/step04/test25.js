/* 주제: 함수 - 클로저(closure) III
*/

"use strict"

var arr = ['홍길동', '임꺽정', '유관순', '안중근', '윤봉길']
var functionList = []
{
  for (let i = 0; i < arr.length; i++) {
    functionList[i] = function() {
      console.log(arr[i]);
    }
  }
}

// console.log(i)  // i는 let변수이기 때문에 for문이 끝나면 제거

functionList[0]();
functionList[1]();
functionList[2]();
functionList[3]();
functionList[4]();
