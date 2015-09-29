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

app.get('/entry/:entryId', function (req, res) {
  var entryId = req.params.entryId;
  if (entries[entryId] != null) {
    res.json(entries[entryId]);
  }
  else {
    res.sendStatus(404);
  }
});


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
