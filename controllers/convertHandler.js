function ConvertHandler() {
    const regexSplitNumbersAndLetters = /[a-z]+|[^a-z]+/gi;
    const regexDoubleFraction = /[/]/gi;
    const isNumber = /^-?[\d.]+(?:e-?\d+)?$/;
    const mapUnit = {
        gal: "L",
        l: "gal",
        km: "mi",
        mi: "km",
        lbs: "kg",
        kg: "lbs",
    };

    this.getNum = function (input) {
        let countFractions = 0;
        let splitInput = input.match(regexSplitNumbersAndLetters);
        if (splitInput.length === 1 && !isNumber.test(splitInput[0])) return 1;
        let result = splitInput[0];
        let validDoubleFraction = result.match(regexDoubleFraction);
        if (validDoubleFraction) countFractions = validDoubleFraction.length;
        return countFractions > 1 ? new Error() : eval(result);
    };

    this.getUnit = function (input) {
        let result = input.match(regexSplitNumbersAndLetters)[1];
        return result;
    };

    this.getReturnUnit = function (initUnit) {
        let result;
        result = mapUnit[initUnit.toLowerCase()];
        return result;
    };

    this.spellOutUnit = function (unit) {
        if (unit.toLowerCase() === "gal") {
            return "gallons";
        }
        if (unit.toLowerCase() === "l") {
            return "liters";
        }
        if (unit.toLowerCase() === "km") {
            return "kilometers";
        }
        if (unit.toLowerCase() === "mi") {
            return "miles";
        }
        if (unit.toLowerCase() === "lbs") {
            return "pounds";
        }
        if (unit.toLowerCase() === "kg") {
            return "kilograms";
        }
    };

    this.convert = function (initNum, initUnit) {
        const galToL = 3.78541;
        const lbsToKg = 0.453592;
        const miToKm = 1.60934;
        let result;

        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result;

        return result;
    };
}

module.exports = ConvertHandler;
