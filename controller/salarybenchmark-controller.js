const Salary = require("../model/salarybenchmark");


const getAverageSalary = (req, res, next) => {
    Salary.getDataSalary( (err, result) => {
        if(err) {
            res.status(500).send("Error getting salary data :(");
        } else {
            res.status(200).json(result);
            next();
        }
    })
}

module.exports = { getAverageSalary }