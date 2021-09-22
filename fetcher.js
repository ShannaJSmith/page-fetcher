const { fstat } = require('fs');
const request = require('request');

const cmlArgs = process.argv.slice(2);

request('http://www.example.edu', (error, response, body) => {

});


fs.writeFile('/vagrant/w1/d3/page-fetcher/file.txt', data, err => {
  if (err) {
    console.error(err)
    return
  }
})