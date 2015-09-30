
var express = require('express');
var app = express();
var url = require('url');

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
  var matchingEntries = [];
  var entriesKeys = Object.keys(entries);
  
  //The code below searches the address book object for corresponding entries:
  for (var i = 1; i <= entriesKeys.length; i ++) {
    if (query.firstName != null && query.firstName.toLowerCase() === entries[i].firstName.toLowerCase()) {
      if (matchingEntries.indexOf(entries[i]) === -1) {
        matchingEntries.push(entries[i]);
      }
    }
    if (query.lastName != null && query.lastName.toLowerCase() === entries[i].lastName.toLowerCase()) {
      if (matchingEntries.indexOf(entries[i]) === -1) {
        matchingEntries.push(entries[i]);
      }
    }
    
    var emailsArray = entries[i].emails;
    
    emailsArray.map(function(emailObject){
      if (query.emailsType != null && query.emailsType.toLowerCase() === emailObject.type) {
        if (matchingEntries.indexOf(entries[i]) === -1) {
          matchingEntries.push(entries[i]);
        }
      }
      if (query.emailsAddress != null && query.emailsAddress.toLowerCase() === emailObject.address) {
        if (matchingEntries.indexOf(entries[i]) === -1) {
          matchingEntries.push(entries[i]);
        }
      }
    });
  }

  //The code below sends the resuling array of entries to the user:
  if (matchingEntries[0] != null) {
    res.send(matchingEntries);
  }
  else {
    res.send("There were no matching entries.");
  }

});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
