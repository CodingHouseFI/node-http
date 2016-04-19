'use strict';

module.exports = function(params, res) {

  var operation = params.shift();  // math, pow, etc.

  switch(operation) {
    case 'sum':
      var sum = require('./sum')(params);
      res.write(`${sum}`);
      break;
  }
  res.end('\n');
};

function randNum() {
  return Math.floor(Math.random() * 100);
}
