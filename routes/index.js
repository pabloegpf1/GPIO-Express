var express = require('express');
var router = express.Router();
var PythonShell = require(‘python-shell’);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/red', red);

function red(req, res) {
  PythonShell.run('python/red_led.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
  });
}


module.exports = router;
