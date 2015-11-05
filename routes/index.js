var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'One New Thing' });
});

/* GET history page. */
router.get('/history/', function(req, res, next) {
  res.render('history', { title: 'My History' });
});

module.exports = router;
