const Salary = require("../model/salarybenchmark");

const receiveSalaryInput = (req, res, next) => {
    Salary.addDataSalary(req.body, (err) => {
        if (err) {
            res.status(500).json(`Error recieving inputs from user: ${err}`);
        } else {
            res.formInput = req.body.formSelection;
            next();
        }
    });
};

const getAverageSalary = (res, next) => {
    Salary.getDataSalary(res.formInput, (err, result) => {
        if (err) {
            res.status(500).send(`Error getting average salary: ${err}`);
        } else {
            res.averageSalary = result[0];
            next();
        }
    });
};

const getMinimumSalary = (res, next) => {
    Salary.getDataMinimumSalary(res.formInput, (err, result) => {
        if (err) {
            res.status(500).send(`Error getting minimum salary: ${err}`);
        } else {
            res.minimumSalary = result[0];
            next();
        }
    });
};

const getMaximumSalary = (res) => {
    Salary.getDataMaximumSalary(res.formInput, (err, result) => {
        if (err) {
            res.status(500).send(`Error getting maximum salary: ${err}`);
        } else {
            res.maximumSalary = result[0];
            const salaryInfo = {
                ...res.averageSalary,
                ...res.minimumSalary,
                ...res.maximumSalary,
            };
            res.status(200).json(salaryInfo);
        }
    });
};

module.exports = {
    getAverageSalary,
    getMinimumSalary,
    getMaximumSalary,
    receiveSalaryInput,
};
