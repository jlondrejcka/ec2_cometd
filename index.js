var nforce = require("nforce"); // Installing nforce module 

var username      = 'my_test@gmail.com',
    password      = 'mypassword',
    securityToken = 'some_security_token',
    topic         = 'lambda',
    oauth;

var org = nforce.createConnection({
      clientId: 'SOME_OAUTH_CLIENT_ID',
      clientSecret: 'SOME_OAUTH_CLIENT_SECRET',
      redirectUri: 'http://localhost:3000/oauth/_callback',
      apiVersion: 'v44.0',
      environment: 'production',
      mode: 'single',
      autoRefresh: true // <--- set this to true
});

org.authenticate({ username: username, password: password }, function(err, oauth) {

    if(err) return console.log(err);
      
    var client = org.createStreamClient();
      
    console.log('subscribing to ' + topic);
    var accs = client.subscribe({ topic: topic });
      
    accs.on('error', function(err) {
        console.log('subscription error');
        console.log(err);
        client.disconnect();
    });
      
    accs.on('data', function(data) {
        console.log(data);
    });
      
});