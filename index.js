require('dotenv').load();

var express = require('express');
var app = express();
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
var io = require('socket.io').listen(server);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'))

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var Kaiseki = require('kaiseki');
var kaiseki = new Kaiseki(process.env.APPLICATION_ID, process.env.API_KEY);

app.post('/userupdated', function(req,res){
	io.emit('userUpdated', req.body.object);
	res.send({message:"Thanks!"});
})

app.get('/', function(req,res){
  kaiseki.getObjects('Page', {where: {user: 'CMS140Doc'}}, function(err, response, body, success){
	res.render('page', {data: body[0]});
  })
});

app.get('/:username', function (req, res) {
  kaiseki.getObjects('Page', {where: {user: req.params.username}}, function(err, response, body, success){
	res.render('page', {data: body[0]});
  })
});





