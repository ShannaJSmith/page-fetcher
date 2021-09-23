const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const path = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.log('ERROR: ', err); 
    return false;
  }
  if (response) {
    console.log('statusCode: ', response && response.statusCode);
    fs.writeFile(path, body, (err) => {
      if (err) {
        console.error('ERROR: ', err);
        return false;
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
        return true;
      }
    });
  }
});