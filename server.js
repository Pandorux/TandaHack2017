// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through package.json.

// http://expressjs.com/en/starter/static-files.html

//app.use(express.static('public'));
/*
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get("/webhook", function (request, response) {
  response.send('hi');
});
*/
var teamname;
var employeenames;
var bodyParser=require('body-parser');
app.use(bodyParser.json());

app.post("/webhook", function(request,response){
  console.log(request.body);
  teamname= request.body.payload.body.name;
    console.log(teamname);
  employeenames=request.body.payload.body.staff;
  console.log(employeenames);

  
   console.log("hi");
  if(request.body.payload.body.type =="clockin"){
    console.log("in");
    ratingTeam(request.body.payload.body.user_id);
  }
  else if(request.body.payload.body.type =="clockout"){
    console.log("out");
    ratingTeam(request.body.payload.body.department_id);
  }
});


         
function ratingTeam(UserNumber) {
  
    
  
};
app.get("/", function (request, response) {
    console.log("in rating in get");
  response.sendFile(__dirname + '/views/index.html');
});



  /*
  
  
};

app.get("/webhook", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  
});
/*
// Simple in-memory store for now
var compliments = [
  "saltbae", 
"leonadrodicaprio",
  "escalte"
]
var names = {
    jared:{
      votes:0,
      compliment: "text",
    },
  mia:{
      votes:2,
      compliment: compliments,
    },
lynn:{
  votes:0,
      compliment: "text",
}
  
};

var input;
var inputvotsnumber;

do{  
  switch(input){
    case "jared": input++;
      break;
}
  
}while(inputvotsnumber<names.length);
console.log(names);
mymax(names);
//develope top 3
var testArray=names.value;

function mymax(names)
{
  var max =0;
  for(var key in names){
    if (names[key].votes>max){
      max=names[key].votes;      
    }
  }
  console.log(max+"hi");
  return max;
}

*/

// listen for requests 🙂
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});