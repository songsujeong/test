/* HTTP 서버 만들기 */



//1) Http 모듈 로딩
const http = require('http')


//2) HttpServer 객체 생성
const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네');
})


//3) 서버 실행
server.listen(8080)

console.log('서버실행 중...')
