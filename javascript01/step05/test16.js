/* 주제: 객체 - 일반 함수와 인스턴스 함수
*/

"use strict"

function Calculator(){
  this.result = 0;
}
  Calculator.prototype.plus = function(value) {this.result += value} //2) 와서 plus함수를 찾고 this로 1)의 객체의 주소를 받아서 계산한다
  Calculator.prototype.minus = function(value) {this.result -= value}
  Calculator.prototype.multiple = function(value) {this.result *= value}
  Calculator.prototype.divide = function (value) {this.result /= value}


var c1 = new Calculator()
var c2 = new Calculator()
var c3 = new Calculator()

 c1.plus(10) // 1) 여기서 plus함수를 찾으러 초기화시킨 생성자함수(Clasculator())로 간다
 c2.minus(20)
 c3.plus(30)



console.log(c1.result)
console.log(c2.result)
console.log(c3.result)


Calculator.prototype.plus(10);








function Calculator(){
  this.result = 0
  this.plus = function(value) {this.result += value}
  this.plus2 = function(a,b) {return a + b}
}

var c1 =new Calculator()
