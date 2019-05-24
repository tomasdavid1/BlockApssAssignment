var express = require('express')
var router = express.Router()
var controller = require('./mainController')

router.get('/', controller.main);

router.get('/buy_ticket', controller.buy_ticket)

router.get('/get_addresses' , controller.get_addresses)
module.exports = router