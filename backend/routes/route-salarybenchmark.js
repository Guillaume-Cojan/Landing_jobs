const express = require("express");
const router = express.Router();
const { getAverageSalary } = require("../controller/salarybenchmark-controller");

router.get("/", getAverageSalary );

module.exports = router;