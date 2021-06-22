const connection = require("../config");

const Salary = {};

Salary.getDataSalary = (callback) => {
    connection.query('SELECT AVG(Avg_Salary) AS average_salary_calculation FROM salarybenchmark WHERE job_role = "Front-End Developer" AND Working_Experience_Aggregated = "0 - 3 years" AND Work_Company_PT_District = "Porto" ', 
    (err, result) => {
        callback(err, result);
    }
    )};

module.exports = Salary;

