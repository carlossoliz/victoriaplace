const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
var cors = require('cors')
const app = express();

app.use(express.static(__dirname + '/www'));
app.use(cors())


var whitelist = ['http://jycapi-001-site1.atempurl.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get('/*',cors(corsOptionsDelegate), function(req,res) {
  res.sendFile(path.join(__dirname+'/www/index.html'));
});

app.listen(port);
console.log(`RUNNING ON PORT ${port}`);