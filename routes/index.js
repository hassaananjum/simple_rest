var express = require('express');
var indexController = require('../controllers/index.js');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
