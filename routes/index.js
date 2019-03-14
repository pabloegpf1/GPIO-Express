var express = require('express')
var router = express.Router()

var exec = require('child_process').exec

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
	var child = exec('python ./public/python/green_led.py')
	child.stdout.on('data', function(data) {
		console.log('stdout: ' + data)
	})
	child.stderr.on('data', function(data) {
		console.log('stdout: ' + data)
	})
	child.on('close', function(code) {
		console.log('closing code: ' + code)
	})
	res.redirect('/')
}

function yellow(req, res) {
	console.log('Turning on yellow led...')
	var child = exec('python ./public/python/yellow_led.py')
	child.stdout.on('data', function(data) {
		console.log('stdout: ' + data)
	})
	child.stderr.on('data', function(data) {
		console.log('stdout: ' + data)
	})
	child.on('close', function(code) {
		console.log('closing code: ' + code)
	})
	res.redirect('/')
}

function red(req, res) {
	console.log('Turning on red led...')
	var child = exec('python ./public/python/red_led.py')
	child.stdout.on('data', function(data) {
		console.log('stdout: ' + data)
	})
	child.stderr.on('data', function(data) {
		console.log('stdout: ' + data)
	})
	child.on('close', function(code) {
		console.log('closing code: ' + code)
	})
	res.redirect('/')
}
