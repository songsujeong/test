/* 요청 정보 다루기
=>계산기 서비스를 구현하라
요청 예)http://localhost:8888/calculator?a=100&b=200&op=-
출력결과 예)
100 - 200 = -100
=> op에 들어갈 연산자: +, -, *, /, %
*/




const http = require('http')
//url 분석기가 들어있는 모듈 로딩
const url = require('url')

const server = http.createServer(function(request, response) {
  if(request.url == '/favicon.ico'){
    response.end()
    return
  }

  console.log('클라이언트 요청이 들어왔네')
  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })

  var urlInfo = url.parse(request.url, true)


  // 클라이언트가 name 이라는 이름으로 보낸 값을 꺼낸다
  var a = parseInt(urlInfo.query.a)
  var b = parseInt(urlInfo.query.b)
  var op = urlInfo.query.op
  var result = 0

/*
URL은 항상 ASCII 코드 값으로 표현해야 한다.
-> '+'문자는 '%2B'로 인코딩
   '%'문자는 '%25'로 인코딩
*/


      switch (op) {
        case '+':
          result = a+b
          break;
        case '-':
          result = a-b
          break;
        case '*':
          result = a*b
          break;
        case '/':
          result = a/b
          break;
        case '%':
          result = a%b
          break;
      }
console.log(a, op, b , '=', result);

  response.end()
})

server.listen(8888)

console.log('서버실행 중...')
