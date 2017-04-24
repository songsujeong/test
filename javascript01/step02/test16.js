/*주제: 연산자 -null, undefined, NaN, Infinity, -Infinity 값 비교
*/

"use strict"



//v0처럼 존재하지 않는 변수를 사용할 수는 없다.
//if(x == undefined) console.log("x는 undefined이다.");
var v0;
if(v0==undefined) console.log("v0는 변수는 존재하지만 값이 없는 상태이다.");

var v1= 20;
v1 = undefined;
if(v1==undefined) console.log("v1은 변수는 존재하지만 값이 없는 상태이다");
if(v1) console.log("v1은 false로 바뀐다.");

var v2 = null;
if(v2==null) console.log("v2는 null이다.");

var v3 = NaN;
console.log("v3의 타입=",typeof v3);
if (v3==NaN) console.log("v3는 NaN이다.");

if (isNaN(v3)) console.log("v3는 isNaN(v3) == true 이다.");

var v4 = Infinity;
if (v4 == Infinity) console.log("v4는 Infinity이다.");
