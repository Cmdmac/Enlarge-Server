var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('connnect success');

  //connect to localhost to notify scan success
	var io = require("socket.io-client");
	let socket =  io.connect("http://localhost:3000");
	if (req.query.url != undefined && req.query.url != '') {
		console.log('redirect uri:' + req.query.url);
		socket.emit('scan', {uri: req.query.url});
	} else {
		console.log('redirect uri is empty');
	}

});

module.exports = router;