var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log("Welcome API");
});

var users =[ 
   {id:1, name:'Joshua', email:'joshua@example.com'}
   ,
   {id:2, name:'Peter', email:'peter@example.com'}
   ,
   {id:3, name:'john', email:'john@example'}

];

app.get('/api/get_users', function(req, res){
	res.send(users);
});

app.listen(8080);