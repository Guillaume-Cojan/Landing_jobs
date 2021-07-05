const Salary = require("../model/salarybenchmark");
const express = require("express");


const receiveSalaryInput = (req, res, next) => {
    Salary.addDataSalary(req.body, (err, result) =>
    {
      if (err) {
        res.status(500).json(`${err}`);
      } else {
          res.formInput = req.body.formSelection
           next() 
      }
    }
    );
  };



const getAverageSalary = (req, res, next ) => {

    Salary.getDataSalary(res.formInput, (err, result) => {
        if(err){
            res.status(500).send("Error getting average salary")
        }
        else{
            console.log("i'm from the response object", res.formInput)
            res.averageSalary = result[0];
            next()
        }
    })
    
};

const getMinimumSalary = (req, res, next ) => {
    Salary.getDataMinimumSalary(res.formInput,(err, result ) => {
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
    Salary.getDataMaximumSalary(res.formInput, (err, result ) => {
        if(err){
            res.status(500).send("Error getting maximum salary")
        }
        else{
            res.maximumSalary = result[0]
            const salaryInfo = {...res.averageSalary,...res.minimumSalary,...res.maximumSalary}
            console.log("Salary Info",salaryInfo)
            res.status(200).json(salaryInfo)
        }
    })

};



module.exports = { getAverageSalary, getMinimumSalary, getMaximumSalary, receiveSalaryInput }

