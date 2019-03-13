var express = require('express')
var router = express.Router()

var python = require('child_process').spawn('python', [ '-i' ])
//python.setEncoding('utf-8')
python.stdout.pipe(process.stdout)

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index')
})

router.get('/green', green)
router.get('/yellow', yellow)
router.get('/red', red)

module.exports = router

function green(req, res) {
	console.log('Turning on green led...')
	python.stdin.write("execfile('./public/python/green_led.py')")
	res.redirect('/')
}

function yellow(req, res) {
	console.log('Turning on yellow led...')
	python.stdin.write("execfile('./public/python/yellow_led.py')")
	res.redirect('/')
}

function red(req, res) {
	console.log('Turning on red led...')
	python.stdin.write("execfile('./public/python/red_led.py')")
	res.redirect('/')
}
