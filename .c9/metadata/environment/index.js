{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":46,"position":46,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":60},"action":"insert","lines":["var nforce = require(\"nforce\"); // Installing nforce module "],"id":1}],[{"start":{"row":0,"column":60},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["var org = nforce.createConnection({","      clientId: 'SOME_OAUTH_CLIENT_ID',","      clientSecret: 'SOME_OAUTH_CLIENT_SECRET',","      redirectUri: 'http://localhost:3000/oauth/_callback',","      apiVersion: 'v44.0',","      environment: 'production',","      mode: 'multi',","      autoRefresh: true // <--- set this to true","});","","org.authenticate({ username: username, password: password }, function(err, oauth) {","","    if(err) return console.log(err);","      ","    var client = org.createStreamClient();","      ","    console.log('subscribing to ' + logs._topic);","    var accs = client.subscribe({ topic: 'lambda' });","      ","    accs.on('error', function(err) {","        console.log('subscription error');","        console.log(err);","        client.disconnect();","    });","      ","    accs.on('data', function(data) {","        console.log(data);","    });","      ","});"],"id":3}],[{"start":{"row":8,"column":13},"end":{"row":8,"column":18},"action":"remove","lines":["multi"],"id":4},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["s"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["i"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["n"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["g"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["l"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"remove","lines":["e"],"id":5},{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"remove","lines":["m"]},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"remove","lines":["a"]},{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"remove","lines":["n"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"remove","lines":["r"]}],[{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["r"],"id":6}],[{"start":{"row":12,"column":52},"end":{"row":12,"column":53},"action":"remove","lines":["d"],"id":7},{"start":{"row":12,"column":51},"end":{"row":12,"column":52},"action":"remove","lines":["r"]},{"start":{"row":12,"column":50},"end":{"row":12,"column":51},"action":"remove","lines":["o"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":50},"action":"remove","lines":["w"]}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"],"id":9},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":10},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["u"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["s"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["e"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":[" "],"id":11},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[" "],"id":12}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["j"],"id":13},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["o"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["s"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["e"],"id":14},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"remove","lines":["s"]}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["e"],"id":15},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["@"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["t"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["e"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["t"],"id":16},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["."]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["c"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["o"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["m"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":[";"]}],[{"start":{"row":2,"column":24},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":17}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["'"],"id":18}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["'"],"id":19}],[{"start":{"row":2,"column":26},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":21},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["p"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["a"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["s"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":[" "],"id":22},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "],"id":23}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":13},"action":"insert","lines":["''"],"id":24}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["s"],"id":25},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["a"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["l"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["e"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["s"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["f"]},{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["o"]},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["r"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["c"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["e"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["1"]}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["2"],"id":26},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["3"]}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":[";"],"id":27}],[{"start":{"row":16,"column":67},"end":{"row":16,"column":72},"action":"remove","lines":["oauth"],"id":28},{"start":{"row":16,"column":67},"end":{"row":16,"column":68},"action":"insert","lines":["r"]},{"start":{"row":16,"column":68},"end":{"row":16,"column":69},"action":"insert","lines":["e"]},{"start":{"row":16,"column":69},"end":{"row":16,"column":70},"action":"insert","lines":["s"]},{"start":{"row":16,"column":70},"end":{"row":16,"column":71},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["var user = 'joe@test.com';","var pass = 'salesforce123';",""],"id":29},{"start":{"row":2,"column":0},"end":{"row":5,"column":10},"action":"insert","lines":["var username      = 'my_test@gmail.com',","    password      = 'mypassword',","    securityToken = 'some_security_token',","    oauth;"]}],[{"start":{"row":17,"column":29},"end":{"row":17,"column":33},"action":"remove","lines":["user"],"id":30},{"start":{"row":17,"column":29},"end":{"row":17,"column":37},"action":"insert","lines":["username"]}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":53},"action":"remove","lines":["pass"],"id":31},{"start":{"row":17,"column":49},"end":{"row":17,"column":57},"action":"insert","lines":["password"]}],[{"start":{"row":17,"column":75},"end":{"row":17,"column":79},"action":"remove","lines":["resp"],"id":32},{"start":{"row":17,"column":75},"end":{"row":17,"column":76},"action":"insert","lines":["o"]},{"start":{"row":17,"column":76},"end":{"row":17,"column":77},"action":"insert","lines":["a"]},{"start":{"row":17,"column":77},"end":{"row":17,"column":78},"action":"insert","lines":["u"]},{"start":{"row":17,"column":78},"end":{"row":17,"column":79},"action":"insert","lines":["t"]},{"start":{"row":17,"column":79},"end":{"row":17,"column":80},"action":"insert","lines":["h"]}],[{"start":{"row":23,"column":4},"end":{"row":23,"column":5},"action":"insert","lines":["/"],"id":33},{"start":{"row":23,"column":5},"end":{"row":23,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":4,"column":42},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["t"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["o"]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["p"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["i"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["c"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":12},"action":"insert","lines":["   "],"id":35}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":16},"action":"insert","lines":["    "],"id":36}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":20},"action":"insert","lines":["    "],"id":37}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":20},"action":"remove","lines":["    "],"id":38}],[{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":[" "],"id":39},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":[" "]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["="]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":[" "],"id":40}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":22},"action":"insert","lines":["''"],"id":41}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["l"],"id":42},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["a"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["m"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["b"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["d"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":[","],"id":43}],[{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"remove","lines":["'"],"id":44},{"start":{"row":25,"column":47},"end":{"row":25,"column":48},"action":"remove","lines":["a"]},{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"remove","lines":["d"]},{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"remove","lines":["b"]},{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"remove","lines":["m"]},{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"remove","lines":["a"]},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"remove","lines":["l"]},{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"remove","lines":["'"]}],[{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"insert","lines":["t"],"id":45},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["o"]},{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"insert","lines":["p"]},{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"insert","lines":["i"]},{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"insert","lines":["c"]}],[{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"remove","lines":["/"],"id":46},{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"remove","lines":["/"]}],[{"start":{"row":24,"column":36},"end":{"row":24,"column":42},"action":"remove","lines":["logs._"],"id":47}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":24,"column":43},"end":{"row":24,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1550096034337,"hash":"4fe8510bd65f98c32b876aa9283278e9e7db075f"}