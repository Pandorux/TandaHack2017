var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
    const clientID = 'bff05b6632e15e631148637f1765908a603b4ccf1e0725d25fafcbca69b8bce3';
    const url = 'https://my.tanda.co/api/oauth/authorize?scope=department+user&client_id=' + clientID + '&redirect_uri=http://localhost:3000/callback&response_type=code';
    // request.get(url, function (err, response, body) {
    //     res.send(body);
    // });
    res.redirect(url);
});

router.get('/auth', function (req, res, next) {
    const url = 'https://my.tanda.co/api/oauth/token';
    request.post({
        url: url,
        form: {
            client_id:'bff05b6632e15e631148637f1765908a603b4ccf1e0725d25fafcbca69b8bce3',
            client_secret:'71000bb1a1435891f154c3051b28454faa3e100cf8f7fe87c936ba3187455bdb',
            code:'be4dbbf204a976ed456e111bf57670f7aa20f02944c26dbc8a11231ca303ecda',
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
    const url = 'https://my.tanda.co/api/v2/users';
    request.get({
        url: url,
        headers: {
            'Authorization': 'bearer 26f22b9a4ab572f27a69ef31bb7f7b5bd86c6c504f09e78dc3ee59261b60f7bb'
        }
    },
    function(err, response, body) {
        res.send(body);
    })
});

module.exports = router;