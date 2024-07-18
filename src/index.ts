const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err:any, rows:any, fields:any) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()