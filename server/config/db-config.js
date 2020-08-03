const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "Tsawwassen604",
  database: "mydb",
});

module.exports = {
  mysql,
  con
}