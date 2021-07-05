const express = require("express");
const connection = require("../config");
const router = express.Router();
const { getMinimumSalary, getMaximumSalary, getAverageSalary, receiveSalaryInput } = require("../controller/salarybenchmark-controller");

router.post("/", receiveSalaryInput, getAverageSalary, getMinimumSalary, getMaximumSalary);

// router.get("/", getAverageSalary, getMinimumSalary, getMaximumSalary)




module.exports = router;
