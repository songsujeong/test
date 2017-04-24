/* HTTP 서버 만들기 - single 스레드방식 */




const http = require('http')
const server = http.createServer(function(request, response) {
  console.log('클라이언트 요청이 들어왔네')


  setTimeout(function() {
    response.end()
  }, 5000)
})
server.listen(8888)

console.log('서버실행 중...')
