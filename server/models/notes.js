const db = require('../config/db-config');

const getNotes = (req, res) => {

    //var sql =`SELECT * FROM comment;`
    var sql = `CALL GetAllComments()`

    db.con.query(sql, function (err, result) {
    	if (err) throw err;
    	res.send({'message': "Result: " + JSON.stringify(result)});
  	});

}

const insertNotes = (req, res) => {

        let textInput = "!!TESTING INSERT!!";
        let dateInput = new Date().toLocaleDateString().split("/");

        //Note, the values must be wrapped in single quotes. If they are not, you will receive an SQL syntax error when running the command.
        //var sql = `INSERT INTO comment (text, date) VALUES ('${textInput}', '${dateInput}');`;
        var sql = `CALL InsertComment('${textInput}', '${dateInput}')`

        //TODO : The above code is probably vulnerable to SQL Injections. 


        db.con.query(sql, function (err, result) {
            if (err) throw res.send({'message': err});
            res.send({'message': "inserted" });
        });
 
}

module.exports = {
  getNotes,
  insertNotes,
}