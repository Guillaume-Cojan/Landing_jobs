const Salary = require("../model/salarybenchmark");
const express = require("express");


const getAverageSalary = (req, res, next ) => {
    Salary.getDataSalary((err, result ) => {
        if(err){
            res.status(500).send("Error getting average salary")
        }
        else{
            res.averageSalary = result[0];
            console.log(res.averageSalary)
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
            res.minimumSalary = result[0];
            console.log(res.minimumSalary);
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
            res.maximumSalary = result[0]
            const salaryInfo = {...res.averageSalary,...res.minimumSalary,...res.maximumSalary}
            console.log(salaryInfo)
            res.status(200).json(salaryInfo)
        }
    })

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

module.exports = { getAverageSalary, getMinimumSalary, getMaximumSalary, addSalary }

