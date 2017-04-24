/* 주제: 함수 - 함수를 return 받기
*/

"use strict"


function calculator(op) {
  switch (op) {
    case "+":
    //익명 함수를 정의한 후 그 익명 함수의 주소를 리턴
      return function(a, b) {
        return a + b;
      };
    case "-":
    //익명 함수를 정의한 후 그 익명 함수의 주소를 리턴
      return function(a, b) {
        return a - b;
      };
  }
}

var f = calculator("+");

var value = f(10, 20);
console.log(value);


f = calculator("-");
value = f(10, 20);
console.log(value);


//실무에서는 리턴 받은 함수의 주소를 바로 사용하는 경우가 많다.
value = calculator("-")(10,20);
console.log(value);


//리턴 값을 바로 출력할 수 있다.
console.log(calculator("-")(10,20));
