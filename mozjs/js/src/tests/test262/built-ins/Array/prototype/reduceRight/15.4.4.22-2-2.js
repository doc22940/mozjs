// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-2-2
description: >
    Array.prototype.reduceRight - 'length' is own data property on an
    Array
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}

assert([12, 11].reduceRight(callbackfn, 11), '[12, 11].reduceRight(callbackfn, 11) !== true');
assert(accessed, 'accessed !== true');

reportCompare(0, 0);
