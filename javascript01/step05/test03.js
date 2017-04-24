/* 주제: 객체 - 변수에 저장하는 것은 객체의 주소이다.
*/

"use strict"

var names1 = ["홍길동", "임꺽정", " 유관순"] //[] 꼭 빈 배열을 만들어줘야 한다.
var names2 = names1

names1[5] = "윤봉길"

console.log(names1)
console.log(names2)
console.log('--------------------------');

var obj1 = {"name": "홍길동", "name2": "임꺽정", "name3": "유관순"}
var obj2 = obj1
obj2.name = "오호라"
console.log(obj1)
console.log(obj2)

//참고
//숫자와 논리값(number, boolean)인 경우 값을 주고 받는다

var v1 = 100;
var v2 = v1
v1 =200;
console.log(v1,v2);

v1 = true;
v2 = v1;
v1 = false
console.log(v1, v2);



v1 = '홍길동'
v2 = v1
v1 ='임꺽정'

console.log(v1 ,v2);

v1 = "홍길동"
v2 = v1.replace("동", "순") //원본은 안바뀌고 새문자열으로 추가됨
console.log(v1, v2)

v1 = '오호라....그렇군요...이렇게 긴 문자열을 값으로 .,..........................'
v2 = v1
console.log(v1);
console.log(v2);
