'use strict';

module.exports = function(numStrs) {
  return numStrs.reduce((sum, num) => {
    return sum + parseFloat(num);
  }, 0);
}
