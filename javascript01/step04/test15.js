/* 주제: 함수 - 함수의 아규먼트를 받아 저장하는 내장 변수 "arguments"
*/

"use strict"

function f1() {
  console.log(arguments.length)
  console.log(arguments)
  console.log("-----------------------------------");
}

f1()
f1(10)
f1(10, 20)
f1(10, 20, 30)
f1(10, 20, 30, 40)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

function f2(a, b) {
  console.log(arguments.length)
  console.log(arguments)
  console.log(a, b)
  console.log("----------------------------------")
}
f2()
f2(10)
f2(10, 20)
f2(10, 20, 30)
f2(10, 20, 30, 40)
