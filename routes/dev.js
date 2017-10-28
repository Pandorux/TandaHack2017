var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    const url = 'https://my.tanda.co/api/oauth/authorize?scope=department+user&client_id=0e503eb85ceb04d8b3038216350e4e367b5fae6999f81f401f24adb42428591b&redirect_uri=http://localhost:3000/callback&response_type=code';
    request.post(url, function (err, response, body) {
        res.send(body);
    });
});

router.get('/auth', function (req, res, next) {
    const url = 'https://my.tanda.co/api/oauth/token';
    request.post({
        url: url,
        form: {
            client_id:'0e503eb85ceb04d8b3038216350e4e367b5fae6999f81f401f24adb42428591b',
            client_secret:'e63ea353fcbaa254c2065ff7a24a26e6045950e2e6ba8daedb814aa3db9f0348',
            code:'660db128207d6207a292a5a336837a1dd435cfdd4bba8e263a6db3b2ee9f911b',
            redirect_uri:'http://localhost:3000/callback',
            grant_type:'authorization_code'
        }},
        function (err, response, body) {
            res.send(body);
        }
    );
});

// 3f691f133b5a926201431836bb27a63467a5a883adca3d59e8106d8aa29efff3

router.get('/api', function(req, res, next) {
    const url = 'https://my.tanda.co/api/v2/users/me';
    request.get({
        url: url,
        headers: {
            'Authorization': 'bearer 3f691f133b5a926201431836bb27a63467a5a883adca3d59e8106d8aa29efff3'
        }
    },
    function(err, response, body) {
        res.send(body);
    })
});

module.exports = router;