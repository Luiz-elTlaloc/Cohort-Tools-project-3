var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET cohorts data.
router.get('/cohorts', function(req, res) {
  res.sendFile(path.join(__dirname, '../cohorts.json'));
});

// GET students data.
router.get('/students', function(req, res) {
  res.sendFile(path.join(__dirname, '../students.json'));
});

module.exports = router;