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
        let result = 0;
        if(initUnit.toLowerCase() === 'gal') {
            result = initNum * galToL;
            return result.toFixed(5);;
        }
        if(initUnit.toLowerCase() === 'l') {
            result = initNum / galToL;
            return result.toFixed(5);;
        }
        if(initUnit.toLowerCase() === 'lbs') {
            result = initNum * lbsToKg;
            return result.toFixed(5);;
        }
        if(initUnit.toLowerCase() === 'kg') {
            result = initNum / lbsToKg;
            return result.toFixed(5);;
        }
        if(initUnit.toLowerCase() === 'mi') {
            result = initNum * miToKm;
            return result.toFixed(5);;
        }
        if(initUnit.toLowerCase() === 'km') {
            result = initNum / miToKm;
            return result.toFixed(5);
        }
        return result;
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
        let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
        return result;
    };
}

module.exports = ConvertHandler;
