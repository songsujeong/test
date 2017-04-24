/* HTTP 서버 만들기 - 클라이언트에게 응답하기 */




const http = require('http')
const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네')

  response.end()                //HTTP응답을 완료한다
})

server.listen(8888)

console.log('서버실행 중...')
