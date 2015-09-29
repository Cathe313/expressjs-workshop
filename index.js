
var express = require('express');
var app = express();

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
    phoneNumber: [
      {type: "home", phoneNumber: "514-123-4567"},
      {type: "other", phoneNumber: "819-659-6383"}
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
    phoneNumber: [
      {type:"home", phoneNumber: "416-987-5678"},
      {type:"work", phoneNumber: "740-237-7522"}
      ]
  }
};


app.get('/entry/search', function (req, res) {
  var queries = {};
  if (req.query.firstName != null) {
    queries.firstName = req.query.firstName;
  }
  if (req.query.lastName != null) {
    queries.lastName = req.query.lastName;
  }
  if (req.query.email != null) {
    queries.email = req.query.email;
  }
  if (req.query.phoneNumber != null) {
    queries.phoneNumber = req.query.phoneNumber;
  }
  //res.send(queries);
  
  var keys = Object.keys(queries);
  //res.send(keys);
  
  var entriesKeys = Object.keys(entries);
  //res.send(entriesKeys)
  
  for (var keys in queries) {
    for (var entry in entries) {
      if (entry.hasOwnProperty(keys)) {
        res.send(entry);
      }
    }
  } 


/*  
  for (var key in entries) {
    if (entries.hasOwnProperty(key)) {
        console.log(key);
    }
}
  if (req.query.id != null) {
    res.send('id: ' + req.query.id);
  }
  else {
    res.sendStatus(404);
  }*/
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
