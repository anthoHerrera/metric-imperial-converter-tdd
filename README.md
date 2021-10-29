# [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)

**User Story 1:** You can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)

**User Story 1:** You can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)

**User Story 2:** You can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)

**User Story 3:** You can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)

**User Story 4:** All incoming units should be accepted in both upper and lower case, but should be returned in both the initUnit and returnUnit in lower case, except for liter, which should be represented as an uppercase 'L'.

**User Story 5:** If the unit of measurement is invalid, returned will be 'invalid unit'.

**User Story 6:** If the number is invalid, returned will be 'invalid number'.

**User Story 7:** If both the unit and number are invalid, returned will be 'invalid number and unit'.

**User Story 8:** You can use fractions, decimals or both in the parameter (ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.

**User Story 9:** Your return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in the format '{initNum} {initUnitString} converts to {returnNum} {returnUnitString}' with the result rounded to 5 decimals.

**User Story 10:** All 16 unit tests are complete and passing.

**User Story 11:** All 5 functional tests are complete and passing.