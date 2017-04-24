/* 주제: 객체 - 값 초기화 시키기
*/

"use strict"

var names = ["홍길동", "임꺽정", " 유관순"]; //[] 꼭 빈 배열을 만들어줘야 한다.
names[5] = "윤봉길"
console.log(names);
console.log('--------------------------');

var obj = {"name": "홍길동", "name2": "임꺽정", "name3": "유관순"}
obj.name4 = "안중근"
console.log(obj)

console.log(typeof names)
console.log(typeof obj)



var obj2 = {name: "홍길동", name2: "임꺽정", name3: "유관순"}
console.log(obj2);
