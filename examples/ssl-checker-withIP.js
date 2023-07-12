const sslChecker = require('ssl-checker');
const assert = require('assert');

const hostname = '31.210.0.112';

const getSslDetails = async(hostname) => {
  const result = await sslChecker(hostname);
  assert.equal(result.valid, true, 'certificate of ibm should be valid');
  console.log(`certificate for ${hostname} is valid: ${result.valid}`);
  console.log(`certificate for ${hostname} has those CN: ${result.validFor}`);
  console.log(`certificate for ${hostname} expires on: ${result.validTo}`);
  console.log(`certificate for ${hostname} days remaining: ${result.daysRemaining}`);
};

getSslDetails(hostname);
