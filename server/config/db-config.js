const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "Tsawwassen604",
  port: 3306,
});

module.exports = {
  mysql,
  con
}