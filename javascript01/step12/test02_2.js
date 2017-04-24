/* 클라이언트로 출력하기-응답 데이터의 콘텐츠 타입을 지정하기
  ex) Content-Type : text/plain;charset=UTF-8
  */




const http = require('http')
const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네')

  response.writeHead(200, {
    'Content-Type' : 'text/plain;charset=UTF-8'
  })
  response.write('Hello, World!')
  response.write('안녕하세요!')
  response.end()
})

server.listen(8888)

console.log('서버실행 중...')
