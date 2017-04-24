/* 주제: 흐름 제어문 - 조건문 if ~ else문
*/
"use strict"

var value = 10;
if ((value % 2)==0)
  console.log("짝수입니다");
if ((value % 2) !=0)
  console.log("홀수입니다");

console.log("-----------------------");

value = 11;
if ((value % 2)==0)
  console.log("짝수입니다");
else
  console.log("홀수입니다");

console.log("-----------------------");

/*
value = 11;
if ((value % 2)==0)
  console.log("짝수입니다");
console.log("-----------------------");//<--if문 종료
else
  console.log("홀수입니다");

console.log("-----------------------");
*/

value = 11;
if ((value % 2)==0){
  console.log("짝수입니다");
  console.log("/////////");
}
else
  console.log("홀수입니다");

console.log("-----------------------");
