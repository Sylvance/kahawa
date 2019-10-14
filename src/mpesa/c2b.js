var request = require('request'),
    oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
    auth = "Bearer " + oauth_token;
  
request(
    {
        method: 'POST',
        url : url,
        headers : {
            "Authorization" : auth
        },
        json : {
            "ShortCode": " ",
            "ResponseType": " ",
            "ConfirmationURL": "http://ip_address:port/confirmation",
            "ValidationURL": "http://ip_address:port/validation_url"
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract the 
        console.log(body)
    }
)
