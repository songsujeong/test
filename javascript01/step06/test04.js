/*주제: setTimeout(callback, delay[, args]) //앞에 callback, delay는 필수 뒤에 [] 선택사항
  setTimeout() : callback함수
*/
"use strict"

function f1() {
  console.log('1초 지났음')
}
setTimeout(f1, 1000)  //비동기 방식 호출. 1초후에 호출될 함수를 등록 후 바로 리턴

console.log('첫 번째 타임아웃 함수를 심었다');
// == 위랑 같음

setTimeout(function() {  //비동기 방식 호출. 3초후에 호출될 함수를 등록 후 바로 리턴
  console.log('3초 지났음');
}, 3000)

console.log('두 번째 타임아웃 함수를 심었다');
