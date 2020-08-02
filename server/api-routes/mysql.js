var express = require('express');
var router = express.Router();

const Notes = require('../models/notes')

/* GET users listing. */
router.get('/', function(req, res) {
  	res.send({'message': "hello"});
});

router.get('/notes', Notes.getNotes);
router.post('/notes', Notes.insertNotes);

module.exports = router;