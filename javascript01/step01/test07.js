
//다이나믹타입바인딩

"use strict"
var name;
console.log(typeof name);

name = "홍길동";
console.log(typeof name);

name = '임꺽정';
console.log(typeof name); //자바스크립트에선 "", '' 상관없음

name = 20;
console.log(typeof name);

name = 3.14;
console.log(typeof name);

name = true;
console.log(typeof name);

name = new Object();
console.log(typeof name);

name = [];
console.log(typeof name);

name = function(){};
console.log(typeof name);

name = null;
console.log(typeof name);

name = undefined;
console.log(typeof name);

name = NaN;
console.log(typeof name);
