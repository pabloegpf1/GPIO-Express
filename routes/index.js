var express = require('express')
var router = express.Router()
var PythonShell = require('python-shell')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' })
})

router.get('/green', green)
router.get('/yellow', yellow)
router.get('/red', red)

function green(req, res) {
	console.log('Turning on green led...')
	PythonShell.run('python/red_led.py', null, function(err) {
		if (err) {
			throw err
		} else {
			console.log('finished')
		}
	})
}

function yellow(req, res) {
	console.log('Turning on yellow led...')
	PythonShell.run('python/yellow_led.py', null, function(err) {
		if (err) {
			throw err
		} else {
			console.log('finished')
		}
	})
}

function red(req, res) {
	console.log('Turning on red led...')
	PythonShell.run('python/red_led.py', null, function(err) {
		if (err) {
			throw err
		} else {
			console.log('finished')
		}
	})
}

module.exports = router
