/* 주제: 객체 - defineProperty() 응용

*/

"use strict"


function Calculator() {
  var result = 0;
  Object.defineProperty(this, 'result', {
    value: 0,
    set: function(value) {
      result = value
    },
    get: function() {
      return result
    }
  })
}

Calculator.prototype.plus = function(value) {this.result += value}
Calculator.prototype.minus = function(value) {this.result -= value}


var calc1 = new Calculator()

calc1.plus(100)
calc1.minus(20)
calc1.plus(10)
calc1.result = 1000
console.log(calc1.result)
