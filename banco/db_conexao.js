const mysql = require('mysql');
const conexao = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_estagio',
});

module.exports = conexao;