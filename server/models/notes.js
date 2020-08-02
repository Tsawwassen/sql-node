const db = require('../config/db-config');

const getNotes = (req, res) => {
    db.con.query(`SELECT * FROM ${db.mysql.escapeId('comment.comment')};`, function (err, result) {
    	if (err) throw err;
    	res.send({'message': "Result: " + JSON.stringify(result)});
  	});

}

const insertNotes = (req, res) => {

	let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
    let query = db.mysql.format(insertQuery,["comment.comment","text","date","TESTING INSERT", (( new Date() ).toLocaleDateString().split("/")) ]);

    db.con.query(query,(err, response) => {
        if (err) throw res.send({'message': err});

        // rows added
        res.send({'message': "inserted" });
    });
}

module.exports = {
  getNotes,
  insertNotes,
}