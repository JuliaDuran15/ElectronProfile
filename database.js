const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'julia12345xastre',
  database: 'sistema_usuario'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL!');


connection.query("CREATE DATABASE IF NOT EXISTS sistema_usuario", (err, result) => {
  if (err) {
    console.error('Erro ao criar o banco de dados:', err);
    return;
  }
  console.log("Database 'sistema_usuario' created");

  const sql = `
    CREATE TABLE IF NOT EXISTS customers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255),
      senha VARCHAR(255),
      email VARCHAR(255),
      cep VARCHAR(255),
      rua VARCHAR(255),
      bairro VARCHAR(255),
      localidade VARCHAR(255),
      uf VARCHAR(255)
    )
  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table 'customers' created");
  });
});
});

module.exports = connection;