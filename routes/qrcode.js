var qr = require('qr-image')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var text = 'http://172.16.46.136/connect?config=';//req.query.text;
  try {
    var img = qr.image(text,{size :10});
    res.writeHead(200, {'Content-Type': 'image/png'});
    img.pipe(res);
  } catch (e) {
    res.writeHead(414, {'Content-Type': 'text/html'});
    res.end('<h1>414 Request-URI Too Large</h1>');
  }
});

module.exports = router;
