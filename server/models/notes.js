//mySQL Database init
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "Tsawwassen604",
  port: 3306,
});

const getNotes = (req, res) => {
	
    con.query(`SELECT * FROM ${mysql.escapeId('notes.notes')};`, function (err, result) {
    	if (err) throw err;
    	res.send({'message': "Result: " + result[0].note });
  	});

}

module.exports = {
  getNotes,
}