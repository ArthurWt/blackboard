var express = require('express');
var server = express(); // better instead

server.use(express.static('dist'))
server.get('/', function(req,res){
  res.sendfile(__dirname + "/index.html")
})

server.listen(9999);