const express = require("express");
const connection = require("../config");
const router = express.Router();
const { getMinimumSalary, getMaximumSalary, getAverageSalary } = require("../controller/salarybenchmark-controller");

// router.get("/minimum", getMinimumSalary)
// router.get("/maximum", getMaximumSalary)
router.get("/", getAverageSalary, getMinimumSalary, getMaximumSalary)


module.exports = router;