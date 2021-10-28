"use strict";
const express = require("express");
const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

const router = express.Router();

router.route("/").get((req, res) => {
    let convertHandler = new ConvertHandler();
    const { input } = req.query;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    let responseObject = {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: convertHandler.convert(),
        returnUnit: convertHandler.getReturnUnit(),
        string: convertHandler.getString(),
    };
    res.json(responseObject);
});

module.exports = router;
