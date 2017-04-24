/* in-parameter 활용 */


const mysql = require('mysql')

const connection = mysql.createConnection({
  database: 'webappdb',
  user: 'webapp',
  password: '1111'

})

connection.connect()

connection.query('insert into memb(name, email, tel, pwd) vlues(?,?,?,password(?))',
                 ["aaa2", "awe@test.com", "111-1111", "1111"],

function(error, results) {

  console.log('결과를 가져옴')
  if(error) throw error;
  console.log(results);
})
connection.end()
console.log('MySQL 서버와의 연결 끊기가 예약되었음');
