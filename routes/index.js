var express = require('express');
var router = express.Router();

const webname = 'Hack Ignite';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: `${webname} - Home` });
});

router.get('/signup', function(req, res,next) {
  res.render('signup', { title: `${webname} - Signup`});
});

module.exports = router;
