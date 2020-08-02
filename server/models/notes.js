db = require('../config/db-config');

const getNotes = (req, res) => {
    db.con.query(`SELECT * FROM ${db.mysql.escapeId('notes.notes')};`, function (err, result) {
    	if (err) throw err;
    	res.send({'message': "Result: " + result[0].note });
  	});

}

module.exports = {
  getNotes,
}