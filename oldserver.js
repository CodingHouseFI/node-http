'use strict';

const PORT = 3000;

var http = require('http');

var server = http.createServer((req, res) => {
  var params = req.url.split('/');
  params.shift(); // throwing out the empty string
  var task = params.shift();

  switch(task) {
    case 'square':
      var num = params[0];
      var square = Math.pow(num, 2);
      res.write(`${square}`);
      break;
    case 'cube':
      var num = params[0];
      var cube = Math.pow(num, 3);
      res.write(`${cube}`);
      break;
    case 'pow':
      var base = params[0];
      var exponent = params[1];
      var pow = Math.pow(base, exponent);
      res.write(`${pow}`);
      break;
    case 'sum':
      var sum = params.reduce((acc, num) => {
        return acc + parseInt(num);
      }, 0);
      res.write(`${sum}`)
      break;
    default:
      res.write('Default.');
  }

  res.end('\n');
});

server.listen(PORT, function(err) {
  if(err) return console.log('error!:', err);
  console.log(`Node server listening on port ${PORT}`);  
});
