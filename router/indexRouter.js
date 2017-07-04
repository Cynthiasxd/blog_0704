var express = require('express');
var router = express.Router();

// 导入 indexCtrl
var indexCtrl = require('../controller/indexCtrl.js');


router
    .get('/', indexCtrl.showIndexPage);


module.exports = router;