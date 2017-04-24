/* 주제: 객체 - this 변수
*/

"use strict"

function f1() {
  console.log(this)
}

new f1()

f1() //this라는 변수가 생성되지 않는다.
