/* 요청 정보 다루기
=> 사용자로부터 페이지 번호와 개수를 입력받아
  학생 목록을 html 페이지로 출력하시오.
  =>요청 예)
  http://localhost:8888/student/list.do?pageNo=2&pageSize=3
  =>출력 예)
  간단히 테이블로 출력하라!
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
