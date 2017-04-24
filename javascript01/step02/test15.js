
"use strict"

console.log("7" == 7 );
console.log("7" == 8 );


console.log("0" == false); // boolean값이 number로 바뀜, 0 == 0 (false == 0)
console.log("1" == true);
console.log("true" == true); // "true" => NaN, true == 1 .. NaN == 1 (NaN == false)
console.log("hello" == true);
console.log("" == false);//""빈문자를 숫자로 바꾸면 0, 0은 false

console.log("-------------------------------------");


console.log(false == null);
console.log(false == undefined);
console.log(false == NaN);
console.log(false == 0);
console.log(false == []);

console.log("-------------------------------------");

console.log(true == 7 ); // 1 == 7 [false], number를 boolean으로 바꾸면 0을제외한 모든 숫자는 true(ture == true)
                        // 즉, boolean값이 number로 바뀐것

console.log("0" == null);
console.log("0" == undefined);
