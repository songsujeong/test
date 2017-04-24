/* 주제: 흐름 제어문 - switch와 조건 값
*/
"use strict"

var level;

switch ("문자열") {
  case "문자열":
    console.log("문자열 가능!");
    break;
  case 1:
    console.log("숫자 가능!");
    break;
  case 3.14159:
    console.log("부동소수점 가능!");
    break;
  case true:
    console.log("boolean값 가능!");
    break;
  case undefined:
    console.log("undefined 가능!");
    break;
  case null:
    console.log("null 가능!");
    break;
  case NaN:
    console.log("NaN 가능!"); //출력 되지 않음, 직접 비교할 수 없다. isNaN()으로 확인 해야한다.
    break;
}
console.log("--------------------------------------");

var v =NaN;

if (v == NaN)
  console.log(NaN);
