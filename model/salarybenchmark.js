const connection = require("../config");

const Salary = {};

Salary.getDataSalary = (callback) => {
    "SELECT job_role FROM salarybenchmark LIMIT 10",
    (err, result) => {
        callback(err, result);
    }
}

module.exports = Salary;