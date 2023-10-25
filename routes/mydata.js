var express = require('express');
var router = express.Router();

/* GET fact about myself. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Jake Schellhorn' });
});

module.exports = router;
