"use strict";
const express = require("express");
const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

const router = express.Router();

router.route("/").get((req, res) => {
    try {
        let convertHandler = new ConvertHandler();
        const { input } = req.query;
        const initNum = convertHandler.getNum(input);
        const initUnit = convertHandler.getUnit(input);
        
        const returnNum = convertHandler.convert(initNum, initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        const string = convertHandler.getString(
            initNum,
            initUnit,
            returnNum,
            returnUnit
        );
        if(initNum instanceof Error && !(convertHandler.spellOutUnit(initUnit) instanceof Error)) {
            throw new Error('invalid number');
        }
        if(!(initNum instanceof Error) && convertHandler.spellOutUnit(initUnit) instanceof Error) {
            throw new Error('invalid unit');
        }
        if(initNum instanceof Error && convertHandler.spellOutUnit(initUnit) instanceof Error) {
            throw new Error('invalid number and unit');
        }
        let responseObject = {
            initNum: initNum,
            initUnit: initUnit,
            returnNum: returnNum,
            returnUnit: returnUnit,
            string: string,
        };
        res.json(responseObject);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

module.exports = router;
