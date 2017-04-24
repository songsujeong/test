
"use strict"

//Boolean : global function

console.log(0, Boolean(0)); //false
console.log(1, Boolean(1));
console.log(-1, Boolean(-1));
console.log(120, Boolean(120));


console.log("", Boolean("")); //false
console.log(" ", Boolean(" "));
console.log("  ", Boolean("  "));
console.log("true", Boolean("true"));
console.log("false", Boolean("false")); //문자열은 무조건 true


console.log(null, Boolean(null));
console.log(undefined, Boolean(undefined));
console.log(NaN, Boolean(NaN));
console.log(Infinity, Boolean(Infinity));
console.log(-Infinity, Boolean(-Infinity));
console.log("------------------------------");

//number 형으로 변환

console.log(true, Number(true));
console.log(false, Number(false));

console.log("----------------------");
//srting --> number
console.log("", Number(""));
console.log(" ", Number(" "));
console.log("  ", Number("   "));
console.log("12", Number("12"));
console.log("017", Number("017"));
console.log("true", Number("true"));
console.log("false", Number("false"));
console.log("hello", Number("hello"));
console.log("2500원", Number("2500원"));
console.log("2500$", Number("2500$"));

console.log("2500원", parseInt("2500원"));
console.log("2500$", parseInt("2500$"));
console.log("$2500", parseInt("$2500"));


console.log(null, Number(null));
console.log(undefined, Number(undefined));
console.log(NaN, Number(NaN));
console.log("------------------------------------");

console.log("[]", Number([]));
console.log("[10]", Number([10]));
console.log("['10']", Number(["10"]))
console.log("[10,20]", Number([10,20]));
console.log("['10', '20']", Number(["10","20"]));
console.log("{}", Number({}));

console.log("------------------------------------");


//string 형으로 변환
//Boolean --> string

console.log(true, String(true));
console.log(false, String(false));

//number --> string
console.log(17, String(17));
// console.log(014, String(014)); //strict 모드에서는 8진 표현을 허락하지 않는다.

console.log(null, String(null));
console.log(undefined, String(undefined));
console.log(NaN, String(NaN));
console.log("[]", String([])); //배열항목
console.log("[10, 20, 30]", String([10, 20, 30])); //배열항목
console.log("{}", String({})); //객체정보
