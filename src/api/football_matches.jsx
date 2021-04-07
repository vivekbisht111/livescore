import request from 'request';
export const  getlivematches=()=>{

        //first we obtain the access token and then make the request
        //to send data as url encoded form data 
        //which the api requires....
        var details = {
            'grant_type': 'client_credentials'
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");


         var to_get_token = {
            method: 'POST',
            headers:{'Content-Type':'application/x-www-form-urlencoded',
            'Authorization':window.env.REACT_APP_KEY},
            body:formBody,
            url:'https://oauth2.elenasport.io/oauth2/token',
         }

        return( request(to_get_token,(err,res,body)=>{
             if(err) throw new Error(err);
             else
             {
                var access = JSON.parse(body);

                // console.log(`body of the token : ${body}`);
                // console.log(`access token of the token : ${access.access_token}`); 
                var options = {
                    method: 'GET',
                    url: 'https://football.elenasport.io/v2/inplay',
                    headers: {
                        Authorization: `Bearer ${access.access_token}`,
                    }
                };
                
                request(options, function(error, response, body) {
                    if (error) throw new Error(error);
                    console.log(body);
                    return body;
                });
             }
         }))
}