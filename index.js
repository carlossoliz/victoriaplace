const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
var cors = require('cors')
const app = express();

app.use(express.static(__dirname + '/www'));
app.use(cors())

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/www/index.html'));
});

app.listen(port);
console.log(`RUNNING ON PORT ${port}`);