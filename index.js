
var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  },
  2: {
    firstName: "Gilbert",
    lastName: "Robert",
    emails: [
      {type: "home", address: "gilbert@gmail.com"},
      {type:"work", address: "gilbert@decodemtl.com"}
      ]
  },
  3: {
    firstName: "Giselle",
    lastName: "Labelle",
    emails: [
      {type: "home", address: "giselle@gmail.com"},
      {type:"work", address: "giselle@decodemtl.com"}
      ]
  },
  4: {
    firstName: "Bright",
    lastName: "Sparks",
    emails: [
      {type: "home", address: "bright@gmail.com"},
      {type:"work", address: "bright@decodemtl.com"}
      ]
  }
};

app.get('/entry/search', function (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  var firstName = query.firstName;
  var lastName = query.lastName;
  var emailType = query.emailType;
  var emailAddress = query.emailAddress;
  

  var queries = [];
  var entriesKeys = Object.keys(entries);
  
  for (var i = 0; i < entriesKeys;length; i ++) {
    if 
  }
  
  res.send(firstName);
  
  
  
  

});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
