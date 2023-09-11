

const mysql = require('mysql2')


const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '123456',
  database: 'cadastro'
}, console.log('Conexao criada'))


module.exports = db