var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end("{ code: 'ok'}");

  //connect to localhost to notify scan success
	var io = require("socket.io-client");
	let socket =  io.connect("ws://localhost");

	if (req.query.config != undefined && req.query.config != '') {
		console.log('redirect config:' + req.query.config);
		socket.emit('scan', JSON.parse(req.query.config));
	} else {
		console.log('redirect config is empty');
	}

});

module.exports = router;