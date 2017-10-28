var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// callback handler
router.get('/callback', function (req, res, next) {
    console.log(req.query);
    res.send(200);
});

module.exports = router;
