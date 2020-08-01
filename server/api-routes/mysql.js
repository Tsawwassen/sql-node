var express = require('express');
var router = express.Router();

const db = require('../models/notes')

/* GET users listing. */
router.get('/', function(req, res) {
  res.send({'message': "hello"});
});

router.get('/notes', db.getNotes);

module.exports = router;