/* 주제: 객체 - this 변수를 통해 객체를 초기화시키기
*/

"use strict"

function init(){
  this.result = 0;
  this.plus = function(value) {this.result += value}
  this.minus = function(value) {this.result -= value}
  this.multiple = function(value) {this.result *= value}
  this.divide = function (value) {this.result /= value}
}

var calc = new init()

console.log(calc);


//10+20*3-7/2=?
calc.plus(10)
calc.plus(20)
calc.multiple(3)
calc.minus(7)
calc.divide(2)
console.log(calc.result)
