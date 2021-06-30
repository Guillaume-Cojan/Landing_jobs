const Salary = require("../model/salarybenchmark");
const express = require("express");

const getAverageSalary = (req, res) => {
  Salary.getDataSalary((err, result) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.status(200).json(result);
    }
  });
};

const addSalary = (req, res) => {
  Salary.addDataSalary(req.body, (err, results) => {
    if (err) {
      res.status(500).json(`${err}`);
    } else {
      res.status(201).json(results);
    //   console.log(req.body);
    }
  });
};

module.exports = {
  getAverageSalary,
  addSalary,
};
