/*주제: setInterval(callback, delay[, args]) //앞에 callback, delay는 필수 뒤에 [] 선택사항
*/
"use strict"


var count = 0;
{
  let timer = setInterval(function() {
    console.log('1초 지났음');
    if(++count == 10)
      clearInterval(timer)
  }, 1000)
}
var timer = 'ok'
console.log(timer);
