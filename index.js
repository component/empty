
var isArray = require('isarray');

function empty(x) {
  // Arrays
  if (isArray(x)) {
    x.length = 0;
  } 

  // HTML Elements
  else if (x instanceof HTMLElement) {
    while (x.firstChild) {
      x.removeChild(x.firstChild);
    }
  }

  // Array-like objects
  else if ((typeof x.length) == 'number') {
    Array.prototype.splice.call(x, 0, x.length);
  }
}

module.exports = empty;
