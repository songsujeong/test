/* 요청 정보 다루기 */




const http = require('http')
//url 분석기가 들어있는 모듈 로딩
const url = require('url')

const server = http.createServer(function(request, response) {
  if(request.url == '/favicon.ico'){
    response.end()
    return;
  }
  console.log('클라이언트 요청이 들어왔네')


  //요청 URL(클라이언트가 원하는 자원) 추출
  //URL 예) http://localhost:8080/aaa/bbb/ccc.html?v1=xxx7v2=yyyy&v3=zzzzz
  console.log('url=', request.url)


  var urlInfo = url.parse(request.url, true)
  console.log('query=', urlInfo.query)

  console.log('v1 =', urlInfo.query.v1)
  console.log('v1 =', urlInfo.query.v2)
  console.log('v1 =', urlInfo.query.v3)



  response.writeHead(200, {
    'Content-Type' : 'text/html;charset=UTF-8'
  })


  response.write('안녕하세요!')
  response.end()
})

server.listen(8888)

console.log('서버실행 중...')
