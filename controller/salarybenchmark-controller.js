const Salary = require("../model/salarybenchmark");
const express = require("express");


const getAverageSalary = (req, res ) => {
    Salary.getDataSalary((err, result ) => {
        if(err){
            res.status(500).send("Error")
        }
        else{
            res.status(200).json(result)
        }
    })
 
};


module.exports = { getAverageSalary }