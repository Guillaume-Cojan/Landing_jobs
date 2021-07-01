const Salary = require("../model/salarybenchmark");
const express = require("express");


const receiveSalaryInput = (req, res) => {
    Salary.addDataSalary(req.body, (err, result) =>
    {
      if (err) {
        res.status(500).json(`${err}`);
      } else {
          res.formInput = req.body.formSelection
          console.log("res.input is", res.formInput)
          res.status(200).json(result);
        
      }
    
    }
    );
  };

const getAverageSalary = (req, res, next ) => {

    Salary.getDataSalary((err, result) => {
        if(err){
            res.status(500).send("Error getting average salary")
        }
        else{
            console.log(res)
            res.averageSalary = result[0];
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



module.exports = { getAverageSalary, getMinimumSalary, getMaximumSalary, receiveSalaryInput }

