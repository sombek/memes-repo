var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title: 'Express'})
})

router.post('/upload', function(req, res) {
	console.log(req.body[0].blob)
	// let startup_image = req.files.image

})

module.exports = router
