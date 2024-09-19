const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "teste",
    password: "Abelhas56*2002",
    database:"meu_banco_dados",
});

module.exports = conexao;