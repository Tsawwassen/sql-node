const db = require('../config/db-config');

const getNotes = (req, res) => {
    db.con.query(`SELECT * FROM comment;`, function (err, result) {
    	if (err) throw err;
    	res.send({'message': "Result: " + JSON.stringify(result)});
  	});

}

const insertNotes = (req, res) => {

        let textInput = "TESTING INSERT";
        let dateInput = new Date().toLocaleDateString().split("/");

        //Note, the values must be wrapped in single quotes. If they are not, you will receive an SQL syntax error when running the command.
        var sql = `INSERT INTO comment (text, date) VALUES ('${textInput}', '${dateInput}');`;
        
        db.con.query(sql, function (err, result) {
            if (err) throw res.send({'message': err});
            res.send({'message': "inserted" });
        });
 
}

module.exports = {
  getNotes,
  insertNotes,
}