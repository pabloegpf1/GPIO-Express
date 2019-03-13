var express = require('express')
var router = express.Router()
const spawn = require('child_process').spawn

const greenLedProcess = spawn('python', [ '/python/green_led.py' ])
const yellowLedProcess = spawn('python', [ '/python/yellow_led.py' ])
const redLedProcess = spawn('python', [ '/python/red_led.py' ])

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' })
})

router.get('/green', green)
router.get('/yellow', yellow)
router.get('/red', red)

function green(req, res) {
	console.log('Turning on yellow led...')
	greenLedProcess.stdout.on('data', (data) => {
		console.log('Done!')
		res.render('/')
	})
}

function yellow(req, res) {
	console.log('Turning on yellow led...')
	yellowLedProcess.stdout.on('data', (data) => {
		console.log('Done!')
		res.render('/')
	})
}

function red(req, res) {
	console.log('Turning on red led...')
	redLedProcess.stdout.on('data', (data) => {
		console.log('Done!')
		res.render('/')
	})
}

module.exports = router
