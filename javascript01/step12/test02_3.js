/* 클라이언트로 출력하기-html출력
  ex) Content-Type : text/plain;charset=UTF-8
  */




const http = require('http')
const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네')

  response.writeHead(200, {
    'Content-Type' : 'text/html;charset=UTF-8'
  })
  response.write('<html> \
  <head>\
    <title>테스트</title>\
  </head>\
  <body>\
    <h1>안녕하세요!</h1>\
  </body>\
  </html>')
  response.end()
})

server.listen(8888)

console.log('서버실행 중...')
