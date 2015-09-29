var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.type('html');
  res.send('<h1>Hello World!</h1>');  
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
