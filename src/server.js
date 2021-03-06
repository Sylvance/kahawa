var prettyjson = require('prettyjson');
var options = {
    noColor: true
};

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// B2C ResultURL - /api/v1/b2c/result
app.post('/b2c/result', function(req, res) {
    console.log('-----------B2C CALLBACK------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
    };

    res.json(message);
});

// B2C QueueTimeoutURL - /api/v1/b2c/timeout
app.post('/b2c/timeout', function(req, res) {
    console.log('-----------B2C TIMEOUT------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResponseCode": "00000000",
      "ResponseDesc": "success"
    };
  
    res.json(message);
});
  
// C2B ValidationURL - /api/v1/c2b/validation
app.post('/validation', function(req, res) {
    console.log('-----------C2B VALIDATION REQUEST-----------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    var message = {
        "ResultCode": 0,
        "ResultDesc": "Success",
        "ThirdPartyTransID": "1234567890"
    };

    res.json(message);
});

// C2B ConfirmationURL - /api/v1/c2b/confirmation
app.post('/confirmation', function(req, res) {
    console.log('-----------C2B CONFIRMATION REQUEST------------');
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');
  
    var message = {
      "ResultCode": 0,
      "ResultDesc": "Success"
    };
  
    res.json(message);
});
