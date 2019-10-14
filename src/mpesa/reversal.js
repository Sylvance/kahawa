var request = require('request'),
    oauth_token = "ACCESS_TOKEN",
    url = "https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request"
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
            "CommandID":"TransactionReversal",
            "TransactionID":" ",
            "Amount":" ",
            "ReceiverParty":" ",
            "RecieverIdentifierType":"4",
            "ResultURL":"https://ip_address:port/result_url",
            "QueueTimeOutURL":"https://ip_address:port/timeout_url",
            "Remarks":" ",
            "Occasion":" "
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract the response
        console.log(body)
    }
)
