var request = require('request'),
    oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest"
    auth = "Bearer " + oauth_token;
  
request(
    {
        method: 'POST',
        url : url,
        headers : {
            "Authorization" : auth
        },
        json : {
            "InitiatorName": " ",
            "SecurityCredential":" ",
            "CommandID": " ",
            "Amount": " ",
            "PartyA": " ",
            "PartyB": " ",
            "Remarks": " ",
            "QueueTimeOutURL": "http://your_timeout_url",
            "ResultURL": "http://your_result_url",
            "Occasion": " "
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract the response
        console.log(body)
    }
)
