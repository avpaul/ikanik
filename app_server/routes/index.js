var express = require('express');
var router = express.Router();

var indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.home);
router.get('/login', indexCtrl.login);
router.get('/signup', indexCtrl.signup);

module.exports = router;