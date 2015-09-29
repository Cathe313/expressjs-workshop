var express = require('express');
var app = express();

app.get('/op/:operation/:number1/:number2', function (req, res) {
  var operation = (req.params.operation).toLowerCase();
  var num1 = Number(req.params.number1);
  var num2 = Number(req.params.number2);
  var solution = 0;
  function operator(operation, num1, num2) {
    switch(operation) {
      case "add":
        solution = num1 + num2;
        break;
      case "sub":
        solution = num1 - num2;
        break;
      case "mult":
        solution = num1 * num2;
        break;
      case "div":
        solution = num1 / num2;
        break;
      default:
        solution = null;
    }
  }
  operator(operation, num1, num2);
  if (solution != null) {
    res.json({"operator": operation,
    "firstOperand": num1,
    "secondOperand": num2,
    "solution": solution
  });
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
