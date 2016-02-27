var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Routing
app.use(express.static(__dirname + '/html/assets'));
app.get('/', function (req, res) {
	res.sendfile(__dirname + 'html/index.html');
});

io.on('connection', function (socket) {
	
});


server.listen(3000, function() {
	console.log('listening');
});
