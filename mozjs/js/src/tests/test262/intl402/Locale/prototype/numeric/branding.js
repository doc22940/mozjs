// |reftest| skip -- Intl.Locale is not supported
// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.Locale.prototype.numeric
description: >
    Verifies the branding check for the "numeric" property of the Locale prototype object.
info: |
    Intl.Locale.prototype.numeric

    2. If Type(loc) is not Object or loc does not have an [[InitializedLocale]] internal slot, then
        a. Throw a TypeError exception.
features: [Intl.Locale]
---*/

const propdesc = Object.getOwnPropertyDescriptor(Intl.Locale.prototype, "numeric");
if (propdesc !== undefined) {
  const invalidValues = [
    undefined,
    null,
    true,
    "",
    Symbol(),
    1,
    {},
    Intl.Locale.prototype,
  ];

  for (const invalidValue of invalidValues) {
    assert.throws(TypeError, () => propdesc.get.call(invalidValue));
  }
}

reportCompare(0, 0);
