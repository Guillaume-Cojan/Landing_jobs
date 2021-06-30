const express = require("express");
const router = express.Router();
const {
  getAverageSalary,
  addSalary,
} = require("../controller/salarybenchmark-controller");

router.get("/", getAverageSalary);

router.post("/", addSalary);

module.exports = router;
