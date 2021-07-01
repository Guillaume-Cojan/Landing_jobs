const express = require("express");
const connection = require("../config");
const router = express.Router();
const { getMinimumSalary, getMaximumSalary, getAverageSalary, addSalary } = require("../controller/salarybenchmark-controller");


router.get("/", getAverageSalary, getMinimumSalary, getMaximumSalary)


router.post("/", addSalary);

module.exports = router;
