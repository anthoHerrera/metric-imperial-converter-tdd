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
    /*test("spelled-out string unit for each valid input unit", function () {});
    test("convert gal to L", function () {});
    test("convert L to gal.", function () {});
    test("convert mi to km", function () {});
    test("convert km to mi", function () {});
    test("convert lbs to kg", function () {});
    test("convert kg to lbs", function () {});*/
});
