const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
    test("whole number input", function () {
        let input = "15km";
        assert.equal(convertHandler.getNum(input), 15);
    });

    test("decimal number input", function () {
        let input = "1.5lbs";
        assert.equal(convertHandler.getNum(input), 1.5);
    });

    test("fractional input", function () {
        let input = "1/4km";
        assert.equal(convertHandler.getNum(input), 0.25);
    });

    test("fractional input with a decimal", function () {
        let input = "5.4/3lbs";
        assert.equal(convertHandler.getNum(input), 1.8);
    });
    test("double-fraction (i.e. 3/2/3)", function () {
        let input = "3/2/3km";
        assert.instanceOf(convertHandler.getNum(input), Error);
    });
    test("no numerical input ", function () {
        let input = "gal";
        assert.equal(convertHandler.getNum(input), 1);
    });
    test("valid input unit.", function () {
        let units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
        let input = "10L";
        assert.include(units, convertHandler.getUnit(input));
    });
    test("invalid input unit", function () {
        let units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
        let input = "10miles";
        assert.notInclude(units, convertHandler.getUnit(input));
    });
    test("unit for each valid input unit", function () {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    });
    test("spelled-out string unit for each valid input unit", function () {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
    });
    test("convert gal to L", function () {
        let initNum = 4;
        let initUnit = 'gal'
        assert.equal(convertHandler.convert(initNum, initUnit), 15.14164);
    });
    test("convert L to gal.", function () {
        let initNum = 2;
        let initUnit = 'L'
        assert.equal(convertHandler.convert(initNum, initUnit), 0.52834);
    });
    test("convert mi to km", function () {
        let initNum = 3;
        let initUnit = 'mi'
        assert.equal(convertHandler.convert(initNum, initUnit), 4.82802);
    });
    test("convert km to mi", function () {
        let initNum = 10;
        let initUnit = 'km'
        assert.equal(convertHandler.convert(initNum, initUnit), 6.21373);
    });
    test("convert lbs to kg", function () {
        let initNum = 18;
        let initUnit = 'lbs'
        assert.equal(convertHandler.convert(initNum, initUnit), 8.16466);
    });
    test("convert kg to lbs", function () {
        let initNum = 15;
        let initUnit = 'kg'
        assert.equal(convertHandler.convert(initNum, initUnit), 33.06937);
    });
});
