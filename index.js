const crypto = require('crypto');
const secret = 'abcde';

const hash = crypto.createHmac('sha256', secret).update('teste').digest('hex');

console.log(hash);