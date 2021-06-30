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
    }
  });
};


const getAverageSalary = (req, res, next ) => {
    Salary.getDataSalary((err, result ) => {
        if(err){
            res.status(500).send("Error getting average salary")
        }
        else{
            res.averageSalary = result;
            // res.status(200).json(result)
            next()
        }
    })
 
};

const getMinimumSalary = (req, res, next ) => {
    Salary.getDataMinimumSalary((err, result ) => {
        if(err){
            res.status(500).send("Error getting minimum salary")
        }
        else{
            res.minimumSalary = result;
            // res.status(200).json(result)
            next()
        }
    })

};

const getMaximumSalary = (req, res ) => {
    Salary.getDataMaximumSalary((err, result ) => {
        if(err){
            res.status(500).send("Error getting maximum salary")
        }
        else{
            const salaryInfo = {...res.averageSalary,...res.minimumSalary,result
            }
            console.log(salaryInfo)
            res.status(200).json(salaryInfo)
        }
    })

};

module.exports = { getAverageSalary, getMinimumSalary, getMaximumSalary, addSalary }

