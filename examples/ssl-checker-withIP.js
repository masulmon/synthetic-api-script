var https = require('https');
const assert = require('assert');

const hostname = '31.210.0.112';

var options = {
  host: hostname,
  method: 'head',
  path: '/'
};

var req = https.request(options,
  function (res) {
    console.log('certificate authorized:' + res.socket.authorized);
  });

req.end(); 