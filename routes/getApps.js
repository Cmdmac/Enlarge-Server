var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    
  res.writeHead(200, {'Content-Type': 'application/json'});

var addr;
var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                addr = alias.address;
                break;
            }
        }
    }

  var apps = [[{ name: "FileManager",
                icon: "images/compatible_ie.png"
                }, {
                    name: "Calendar",
                    icon: addr + "images/compatible_chrome.png"
                }, {
                    name: "opera",
                    icon: addr + "images/compatible_opera.png"
                },{
                    name: "safari",
                    icon: addr + "images/compatible_safari.png"
                }],
                [{
                    name: "ie",
                    icon: addr + "images/compatible_ie.png"
                }, {
                    name: "chrome",
                    icon: addr +"images/compatible_chrome.png"
                }, {
                    name: addr +"opera",
                    icon: "images/compatible_opera.png"
                },{
                    name: addr +"safari",
                    icon: "images/compatible_safari.png"
                }]];
  res.end(JSON.stringify(apps));
});

module.exports = router;