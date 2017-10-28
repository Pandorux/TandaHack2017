var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// callback handler
router.get('/callback', function (req, res, next) {
    const authCode = res.query.code;
    res.send(200);
});

// webhook

router.post("/webhook", function(request,res){
	
	
	const url = 'https://my.tanda.co/api/v2/users';
	request.get({
		url: url,
		headers: {
			'Authorization': 'bearer 26f22b9a4ab572f27a69ef31bb7f7b5bd86c6c504f09e78dc3ee59261b60f7bb'
		}
	},
	function(err, response, body) {
		res.send("hi");
		let users = JSON.parse(body);
		console.log(users);
		
		var userNames = [];
		
		for (var user in users) {
			
			for (var dId in user.department_id) {
				
				if(dId == request.body.payload.body.department_id) {
					userNames.push(users.name); 
					break;
				}
			}
		}
		
		console.log(userNames);
				
		console.log(request.body);
		teamname= request.body.payload.body.name;
		console.log(teamname);
		employeenames=request.body.payload.body.staff;
		console.log(employeenames);


		alert("hi");
		if(request.body.payload.body.type =="clockin"){
		console.log("in");
		ratingTeam(request.body.payload.body.user_id);
		}
		else if(request.body.payload.body.type =="clockout"){
		console.log("out");
		ratingTeam(request.body.payload.body.department_id);
		}
		
		
	})
	

});

function ratingTeam(UserNumber) {
  
    
};

module.exports = router;
