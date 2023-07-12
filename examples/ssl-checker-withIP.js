var assert = require('assert');

(async function () {
  var getOptions = {
    url: 'https://payment.payline.com/',
    https: { rejectUnauthorized: false }, // accept self signed certificate
    headers: {
      'Additional-Header': 'Additional-Header-Data'
    }
  };

  let getResponse;
  try {
     getResponse = await $got.get(getOptions);
  } catch (error) {
    // Catching the 404 as there's nothing behing the url
    console.info('GET status is ' + error.response.statusCode);
    assert.ok(error.response.statusCode == 404, 'GET status is ' + error.response.statusCode + ', it should be 404');
    error.response.https.
  }
  

  // to print environment variables
  console.info('List PoP environment variables using $synthetic API');
  console.info('Test ID:', $synthetic.TEST_ID);
  console.info('Test Name:', $synthetic.TEST_NAME);
  console.info('Location:', $synthetic.LOCATION);
  console.info('TimeZone:', $synthetic.TIME_ZONE);
  console.info('Job ID:', $synthetic.JOB_ID);

  // to print test custom tags/labels
  console.info('Test Label $synthetic.labels.Team: ' + $synthetic.labels.Team);
  console.info('Test Label $synthetic.labels.Purpose: ' + $synthetic.labels.Purpose);

  // to set custom tags dynamically
  $attributes.set('custom_tag1', 'value1');

})();