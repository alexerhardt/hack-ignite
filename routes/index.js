var express = require('express');
var router = express.Router();

const webname = 'Hack Ignite';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: `${webname} - Home` });
});

module.exports = router;
