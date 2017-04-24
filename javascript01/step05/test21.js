/* 주제: 객체 - 변수 선언시 배열에서 여러개의 항목 받기
*/

"use strict"

// 1)
var a = 10;
var b = 20;
var c = 30;
console.log(a, b, c);

// 2)
var i = 10, j = 20, k = 30;
console.log(i, j, k);

// 3)
var [x, y, z] = [10, 20, 30]
console.log(x, y, z);

// 4)
var obj = {
  name: '홍길동',
  age: 20,
  tel: '111-1111',
  email: 'hong@test.com'
}
var {name, age} = obj  //obj객체의 name, age를 뽑겠다
console.log(name, age);
