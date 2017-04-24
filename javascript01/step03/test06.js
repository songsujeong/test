/* 주제: 흐름 제어문 - 조건문 else의 소속
*/
"use strict"

var age;

age=50;

if (age > 19)
  if (age >= 65)
    console.log("노인");
  else
    console.log("미성년");

console.log("-----------------------");


age=70;

if (age > 19){
  if (age >= 65)
    console.log("노인");
}
else
    console.log("미성년");

console.log("-----------------------");
