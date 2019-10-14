var request = require('request'),
    oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query"
    auth = "Bearer " + oauth_token;
  
request(
    {
        method: 'POST',
        url : url,
        headers : {
            "Authorization" : auth
        },
        json : {
            "Initiator":" ",
            "SecurityCredential":" ",
            "CommandID":"AccountBalance",
            "PartyA":" ",
            "IdentifierType":"4",
            "Remarks":" ",
            "QueueTimeOutURL":"https://ip_address:port/timeout_url",
            "ResultURL":"https://ip_address:port/result_url"
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract the response
        console.log(body)
    }
)
