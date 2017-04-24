/* 주제: 함수 - 정의와 사용II
*/



function f1() {
  console.log("f1()");
}

f1();

function f2() {
  return "hello";
}

var value = f2();
console.log("f2()의 리턴값", value);

function f3(a) {
  console.log("----->", a)
}

f3(100);


function f4(a) {
  return "a = " + a + "입니다.";
}

var value = f4(100);
console.log(value);

console.log(f4(200)); //괄호안에 있는 것 부터 실행
