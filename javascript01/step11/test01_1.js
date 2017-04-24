/*데이터베이스 프로그래밍
=> JavaScript + NodeJS + DBMS(MySQL)*/


//MySQL NodeJS  모듈 사용하기


const mysql = require('mysql')

var connection = mysql.createConnection({
  //host: 'localhost',  // 기본값 localhost
  //port: 3306,        //  기본값 3306
  database: 'webappdb',
  user: 'webapp',
  password: '1111'

})

console.log('MySQL 서버에 연결할 도구 생성완료');

connection.connect()
console.log('MySQL 서버와 연결됨');

connection.end()
console.log('MySQL 서버와의 연결 끊기가 예약되었음');
