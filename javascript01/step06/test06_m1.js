/*주제: 모듈 정의
*/
"use strict"


function plus(a, b) {return a + b}
function minus(a, b) {return a - b}
function multiple(a, b) {return a * b}
function divide(a, b) {return a / b}


// module.exports.모듈을 사용하는 측에서 호출할 이름 = 함수주소
module.exports.plus = plus;

//module.은 삭제할 수 있다
exports.minus = minus;
exports.multiple = multiple;
