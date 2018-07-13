var express = require('express');
var router = express.Router();

var indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.home);
router.get('/login', indexCtrl.login);
router.get('/signup', indexCtrl.signup);
router.get('/newpassword', indexCtrl.newPassword);
router.get('/guides', indexCtrl.guides);
router.get('/forum', indexCtrl.forum);
router.get('/recycle', indexCtrl.recycle);
router.get('/shop', indexCtrl.shop);
router.get('/inovclass', indexCtrl.inovclass);

module.exports = router;