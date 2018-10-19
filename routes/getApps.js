var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
  res.writeHead(200, {'Content-Type': 'application/json'});

  var apps = [[{ name: "FileManager",
                icon: "images/compatible_ie.png"
                }, {
                    name: "Calendar",
                    icon: "images/compatible_chrome.png"
                }, {
                    name: "opera",
                    icon: "images/compatible_opera.png"
                },{
                    name: "safari",
                    icon: "images/compatible_safari.png"
                }],
                [{
                    name: "ie",
                    icon: "images/compatible_ie.png"
                }, {
                    name: "chrome",
                    icon: "images/compatible_chrome.png"
                }, {
                    name: "opera",
                    icon: "images/compatible_opera.png"
                },{
                    name: "safari",
                    icon: "images/compatible_safari.png"
                }]];
  res.end(JSON.stringify(apps));
});

module.exports = router;