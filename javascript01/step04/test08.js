/* 주제: 함수 - arrow function
*/

"use strict"

var f1 = () => "hello";
var value = f1();
console.log(value);


var f2 = () => console.log("okok"); //여기서 출력되는데 왜 밑에선 값이없는가
var value = f2();
console.log(value);


var f3 = () => {
  console.log("---------------");
  console.log("f3()...호출됨");
  console.log("Arrow 함수임.");
  return "hello2";
}
value = f3();
console.log(value);


var f4 = (a, b) => a + b; // --> var f4 = function(a,b) { a + b;}
value = f4(10, 20);
console.log(value);
