const express = require("express");
const router = express.Router();
const {
    getMinimumSalary,
    getMaximumSalary,
    getAverageSalary,
    receiveSalaryInput,
} = require("../controller/salarybenchmark-controller");

router.post(
    "/",
    receiveSalaryInput,
    getAverageSalary,
    getMinimumSalary,
    getMaximumSalary
);

module.exports = router;
