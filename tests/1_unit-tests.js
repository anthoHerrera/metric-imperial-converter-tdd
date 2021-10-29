const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
    test("whole number input", function (done) {
        let input = "15km";
        assert.equal(convertHandler.getNum(input), 15);
        done();
    });

    test("decimal number input", function (done) {
        let input = "1.5lbs";
        assert.equal(convertHandler.getNum(input), 1.5);
        done();
    });

    test("fractional input", function (done) {
        let input = "1/4km";
        assert.equal(convertHandler.getNum(input), 0.25);
        done();
    });

    test("fractional input with a decimal", function (done) {
        let input = "5.4/3lbs";
        assert.equal(convertHandler.getNum(input), 1.8);
        done();
    });
    test("double-fraction (i.e. 3/2/3)", function (done) {
        let input = "3/2/3km";
        assert.instanceOf(convertHandler.getNum(input), Error);
        done();
    });
    test("no numerical input ", function (done) {
        let input = "gal";
        assert.equal(convertHandler.getNum(input), 1);
        done();
    });
    test("valid input unit.", function (done) {
        let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km', 'GAL', 'L', 'LBS', 'KG', 'MI', 'KM'];
        let input = "10L";
        assert.include(units, convertHandler.getUnit(input));
        done();
    });
    test("invalid input unit", function (done) {
        let units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
        let input = "10miles";
        assert.notInclude(units, convertHandler.getUnit(input));
        done();
    });
    test("unit for each valid input unit", function (done) {
        assert.equal(convertHandler.getReturnUnit('gal'), 'L');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi');
        done();
    });
    test("spelled-out string unit for each valid input unit", function (done) {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
        done();
    });
    test("convert gal to L", function (done) {
        let initNum = 4;
        let initUnit = 'gal'
        assert.equal(convertHandler.convert(initNum, initUnit), 15.14164);
        done();
    });
    test("convert L to gal.", function (done) {
        let initNum = 2;
        let initUnit = 'L'
        assert.equal(convertHandler.convert(initNum, initUnit), 0.52834);
        done();
    });
    test("convert mi to km", function (done) {
        let initNum = 3;
        let initUnit = 'mi'
        assert.equal(convertHandler.convert(initNum, initUnit), 4.82802);
        done();
    });
    test("convert km to mi", function (done) {
        let initNum = 10;
        let initUnit = 'km'
        assert.equal(convertHandler.convert(initNum, initUnit), 6.21373);
        done();
    });
    test("convert lbs to kg", function (done) {
        let initNum = 18;
        let initUnit = 'lbs'
        assert.equal(convertHandler.convert(initNum, initUnit), 8.16466);
        done();
    });
    test("convert kg to lbs", function (done) {
        let initNum = 15;
        let initUnit = 'kg'
        assert.equal(convertHandler.convert(initNum, initUnit), 33.06937);
        done();
    });
});
