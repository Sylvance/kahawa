var request = require('request'),
    oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate"
    auth = "Bearer " + oauth_token;
  
request(
    {
        method: 'POST',
        url : url,
        headers : {
            "Authorization" : auth
        },
        json : {
            //Fill in the request parameters with valid values
            "ShortCode":" ",
            "CommandID":"CustomerPayBillOnline",
            "Amount":" ",
            "Msisdn":" ",
            "BillRefNumber":" "
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract the response
        console.log(body)
    }
)
