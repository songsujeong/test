/* 주제: 흐름 제어문 - 조건문
*/
"use strict"

var value =10;

if ((value % 2)==0) console.log("짝수입니다.");


if ((value % 2)==0)
  console.log("짝수입니다.");

console.log("---------------------------");


value = 11;
if ((value % 2) == 0)
  console.log("짝수");
  console.log("입니다.");
console.log("-------------------------");


value = 11;
  if ((value % 2) == 0); //<-- 세미콜론을 사용하는 순간 한 문장이 끝났음을 표시한다.(출력됨)
    console.log("짝수입니다");

console.log("--------------------------");

value = 10;
if ((value % 2) == 0) {
  console.log("짝수");
  console.log("입니다.");
}
